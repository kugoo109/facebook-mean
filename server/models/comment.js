'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Comment Schema
 */
var CommentSchema = new Schema({
    post: {
        type: Schema.ObjectId,
        ref: 'Post'
    },
    content: {
        type: String,
        default: '',
        required: 'Please fill Comment content'
    },
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Comment', CommentSchema);
