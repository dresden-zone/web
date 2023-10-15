{ pkgs, lib, config, mkYarnPackage, yarn }:
mkYarnPackage {
    name = "waiter";
    src = ./.;

    buildInputs = [ yarn ];

    buildPhase = ''
      ls -alh
      ls -alh ./deps
      FILE=$(readlink ./deps/waiter/node_modules)
      rm ./deps/waiter/node_modules
      mkdir ./deps/waiter/node_modules

      cp -r $FILE/ ./deps/waiter/
      chmod -R 777 ./deps/waiter
      cp -r ./node_modules/* ./deps/waiter/node_modules/

      yarn run build
    '';

    installPhase = ''
      mkdir -p $out/dist
      cp -r ./deps/waiter/dist/* $out/dist/
    '';

    doDist = false;
}
