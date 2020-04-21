let LocalDatabase = function(storage) {
    this.storage = storage;

    this.store = function(key, object) {
        this.storage.setItem(key, object);
    }

    this.update = function(key, object) {
        this.storage.setItem(key, { ...this.storage.getItem(key), ...object });
    }

    this.get = function(key) {
        return this.storage.getItem(key);
    }
}