import { access, constants, mkdir, writeFile, unlink } from "node:fs/promises"
import { basename, dirname, relative, sep } from "node:path"
import { pathToFileURL, fileURLToPath } from "node:url"
import { die, log, color } from "./console.js"

/** @type Object<string,boolean> */
const _MKDIRS_CACHE = {}

const _ARGV = process.argv.slice( 0 )
_ARGV[ 0 ] = basename( _ARGV[ 0 ] ).replaceAll( sep, "/" )
_ARGV[ 1 ] = relative( process.cwd(), _ARGV[ 1 ] ).replaceAll( sep, "/" )

const _TEST_RUN = _ARGV.includes( "-t" )

/**
 * Will return a file saver for generating ESLint configuration files
 * 
 * @param {string} tempDir path to store files in temporarily if the `-t` flag is set
 * @param {string} targetDir the real target directory to store files
 * @param {string} cwd Current working directory. By default this is taken from `process.cwd()`
 */
export function createConfigSaver( tempDir, targetDir, cwd = process.cwd() ) {

    const $base = _TEST_RUN ? tempDir : targetDir
    const $root = pathToFileURL( cwd + sep )

    log.info( color.grey( _ARGV.join( " " ) ), color.cyan( $base ) )

    /**
     * @param {string} filename target file
     * @param {string} data file data
     */
    async function saveFIle( filename, data ) {

        const $path = new URL( `./${ $base }/${ filename }.js`, $root )
        const $rawPath = fileURLToPath( $path, { windows: false } )

        try {

            await access( $path, constants.R_OK | constants.W_OK )
            await unlink( $path )

            log.info( color.yellow( "found and deleted file -" ), $rawPath )

        } catch {

            // const $dir = dirname( $path.href ).replace( "file:///", "" )
            const $dir = dirname( $rawPath )
            const $dirPath = dirname( fileURLToPath( $path ) )

            if ( ! _MKDIRS_CACHE[ $dir ] ) {

                _MKDIRS_CACHE[ $dir ] = true
                log.info( color.blue( "ensuring directory exists -" ), $dir )

                try {

                    await mkdir( $dirPath, { recursive: true } )

                } catch ( err ) {

                    log.error( color.red( "error while creating directory -" ), $dir )
                    die( err )

                }

            }

        }

        data = data
            // ensure all CRLF lines are converted to LF
            .replaceAll( "\r\n", "\n" )
            // remove any empty lines
            .replace( /^\s*$/gm, "" )

        if ( ! data.endsWith( "\n" ) ) data += "\n"

        await writeFile( $path, data )

    }

    Object.defineProperties( saveFIle, { path: { get: () => $base } } )

    return saveFIle

}
