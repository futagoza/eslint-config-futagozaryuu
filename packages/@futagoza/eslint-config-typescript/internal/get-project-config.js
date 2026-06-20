"use strict";

import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import url from "node:url"
import sanitize from "sanitize-filename"

/**
 * @param {string | URL} base 
 * @param {string} filename 
 */
async function _resolve( base, filename ) {

    return path.join( await fs.realpath( base ), filename )

}

/** @param {string | URL} filename  */
async function _exists( filename ) {

    try {

        await fs.access( filename, fs.constants.R_OK | fs.constants.W_OK )
        return true

    } catch {

        return false

    }

}

/**
 * See the `tsconfig.json` section in `README.md`
 * 
 * @param {string | URL} cwd 
 */
export default async function GetProjectConfig( cwd = process.cwd() ) {

    const eslintConfig = await _resolve( cwd, "./tsconfig.eslint.json" )
    if ( await _exists( eslintConfig ) ) return eslintConfig

    const tsconfig = await _resolve( cwd, "./tsconfig.json" )
    if ( await _exists( tsconfig ) ) return tsconfig

    const tempfile = await _resolve( os.tmpdir(), `./tsconfig.${ sanitize( cwd, { replacement: "-" } ) }.json` )
    if ( ! await _exists( tempfile ) ) {

        const config = await fs.readFile( new URL( "./tsconfig.default.json", import.meta.url ), "utf8" )
        if ( typeof cwd !== "string" ) cwd = url.fileURLToPath( cwd )

        await fs.writeFile( tempfile, config.replace( /__CWD__/g, cwd ) )

    }

    return tempfile

}
