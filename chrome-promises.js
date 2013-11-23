(function(O) {

    CP = {};
    CP.fileSystem = {};

    CP.fileSystem.isRestorable = function(id) {
        return new Promise(function(resolve, reject) {
            if (id) {
                chrome.fileSystem.isRestorable(id, function(restorable) {
                    resolve(restorable && id);
                });
            } else {
                resolve(null);
            }
        });
    };

    CP.fileSystem.restoreEntry = function(id) {
        return new Promise(function(resolve, reject) {
            chrome.fileSystem.restoreEntry(id, resolve);
        });
    };

    CP.fileSystem.getFile = function(dirEntry, filename, options) {
        return new Promise(function(resolve, reject) {
            dirEntry.getFile(
                filename,
                options,
                resolve,
                reject
            );
        });
    };

    CP.fileSystem.chooseEntry = function(options) {
        return new Promise(function(resolve, reject) {
            chrome.fileSystem.chooseEntry(options, resolve);
        });
    };

    CP.fileSystem.createWriter = function(file) {
        return new Promise(function(resolve, reject) {
            file.createWriter(resolve);
        });
    };

    CP.fileSystem.write = function(writer, obj, options) {
        return new Promise(function(resolve, reject) {
            writer.onwriteend = function() {
                resolve(writer);
            };
            writer.write(obj, options);
        });
    };

    CP.fileSystem.truncate = function(writer, position) {
        return new Promise(function(resolve, reject) {
            writer.onwriteend = function() {
                resolve(writer);
            };
            writer.truncate(position);
        });
    };

    CP.storage = {};
    CP.storage.local = {};

    CP.storage.local.get = function(keys) {
        return new Promise(function(resolve, reject) {
            chrome.storage.local.get(keys, resolve);
        });
    };

    CP.storage.local.set = function(options) {
        return new Promise(function(resolve, reject) {
            chrome.storage.local.set(options, resolve);
        });
    };


})(CP = {});
