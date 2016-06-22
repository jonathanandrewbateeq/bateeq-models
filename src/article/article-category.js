'use strict'

var MongoModel = require('capital-models').MongoModel;

class ArticleCategory extends MongoModel {
    constructor(source) {
        super('article-category', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}