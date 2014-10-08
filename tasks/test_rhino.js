/* jshint node:true */
module.exports = function( grunt ) {
    "use strict";
    // Run test suite through rhino
    grunt.registerMultiTask("test_rhino", "Run the test suite through rhino", function() {
        var done = this.async();
        var files = this.filesSrc;
        var progress = files.length;

        files.forEach(function(filepath) {
            grunt.util.spawn({
                cmd: "java",
                args: ["-jar", "lib/js.jar", "lib/yuitest-rhino-cli.js", "build/csslint.js", filepath],
                opts: {stdio: "inherit"}
            }, function() {
                progress--;
                if (progress === 0) {
                    done();
                }
            });
        });
    });
};
