ℹ️  🐳 using Docker toolchain
⏩ START: building runnable: sendtoot (javascript)

> prebuild
> webpack

asset index.js 11.2 KiB [compared for emit] [minimized] (name: main) 1 related asset
runtime modules 670 bytes 3 modules
modules by path ./node_modules/@suborbital/runnable/dist/modules/*.js 9.06 KiB
  ./node_modules/@suborbital/runnable/dist/modules/db.js 1.29 KiB [built] [code generated]
  ./node_modules/@suborbital/runnable/dist/modules/ffi.js 183 bytes [built] [code generated]
  ./node_modules/@suborbital/runnable/dist/modules/cache.js 703 bytes [built] [code generated]
  ./node_modules/@suborbital/runnable/dist/modules/file.js 437 bytes [built] [code generated]
  ./node_modules/@suborbital/runnable/dist/modules/graphql.js 595 bytes [built] [code generated]
  ./node_modules/@suborbital/runnable/dist/modules/http.js 2.01 KiB [built] [code generated]
  ./node_modules/@suborbital/runnable/dist/modules/log.js 598 bytes [built] [code generated]
  + 4 modules
modules by path ./node_modules/@suborbital/runnable/dist/bindings/*.js 10.2 KiB
  ./node_modules/@suborbital/runnable/dist/bindings/env.js 8.96 KiB [built] [code generated]
  ./node_modules/@suborbital/runnable/dist/bindings/intrinsics.js 1.25 KiB [built] [code generated]
./src/index.js 1.2 KiB [built] [code generated]
./node_modules/@suborbital/runnable/dist/index.js 1.09 KiB [built] [code generated]
webpack 5.73.0 compiled successfully in 852 ms

> build
> javy build/index.js -o sendtoot.wasm

thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: Uncaught ReferenceError: 'TextEncoder' is not defined
    at 445 (script.js)
    at r (script.js)
    at 427 (script.js)
    at r (script.js)
    at 259 (script.js)
    at r (script.js)
    at 169 (script.js)
    at r (script.js)
    at <anonymous> (script.js)
    at <anonymous> (script.js)
    at <anonymous> (script.js)
    at <anonymous> (script.js)
    at <eval> (script.js)
', crates/core/src/lib.rs:228:61
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
Error: the `wizer.initialize` function trapped

Caused by:
    wasm trap: unreachable
    wasm backtrace:
        0: 0xb40c7 - <unknown>!__rust_start_panic
        1: 0xb3e8c - <unknown>!rust_panic
        2: 0xb3af9 - <unknown>!std::panicking::rust_panic_with_hook::h94d61e41dc3cb549
        3: 0xb314c - <unknown>!std::panicking::begin_panic_handler::{{closure}}::hfb2a7b493f925953
        4: 0xb309b - <unknown>!std::sys_common::backtrace::__rust_end_short_backtrace::h9529007da4de429b
        5: 0xb3647 - <unknown>!rust_begin_unwind
        6: 0xc27fd - <unknown>!core::panicking::panic_fmt::h8a189464cad24b3b
        7: 0xc36df - <unknown>!core::result::unwrap_failed::hc9e17ac6ec77d8f1
        8: 0x45ed - <unknown>!wizer.initialize
        9: 0xc78f1 - <unknown>!wizer.initialize.command_export
    note: using the `WASMTIME_BACKTRACE_DETAILS=1` environment variable to may show more debugging information

Error: Couldn't create wasm from input
npm notice
npm notice New minor version of npm available! 8.11.0 -> 8.12.2
npm notice Changelog: <https://github.com/npm/cli/releases/tag/v8.12.2>
npm notice Run `npm install -g npm@8.12.2` to update!
npm notice
Error: failed to BuildWithToolchain: 🚫 failed to build sendtoot: failed to RunInDir: failed to Run command: exit status 1
Usage:
  subo build [dir] [flags]

Flags:
      --builder-tag string   use the provided tag for builder images
      --docker               build your project's Dockerfile. It will be tagged {identifier}:{appVersion}
  -h, --help                 help for build
      --langs strings        build only Runnables for the listed languages (comma-seperated)
