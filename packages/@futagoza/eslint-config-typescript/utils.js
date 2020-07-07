"use strict";

const fs = require( "fs" );
const os = require( "os" );
const path = require( "path" );
const sanitize = require( "sanitize-filename" );

const resolve = require.resolve;

/**
 * See the `tsconfig.json` section in `README.md`
 */

exports.GetProjectConfig = function GetProjectConfig( cwd = process.cwd(), options = {} ) {

    options.paths = options.paths || [ cwd ];

    try {

        return resolve( "./tsconfig.eslint.json", options );

    } catch ( _fallback_1 ) {

        try {

            return resolve( "./tsconfig.json", options );

        } catch ( _fallback_2 ) {

            const tmpdir = fs.realpathSync( os.tmpdir() );
            const id = sanitize( cwd, { replacement: "-" } );

            const tempfile = path.join( tmpdir, `tsconfig.${ id }.json` );

            if ( ! fs.existsSync( tempfile ) ) {

                const config = fs
                    .readFileSync( resolve( "./tsconfig.default.json" ), "utf8" )
                    .replace( /__CWD__/g, cwd.replace( /\\/g, "/" ) );

                fs.writeFileSync( tempfile, config );

            }

            return tempfile;

        }

    }

};
