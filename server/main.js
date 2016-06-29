/* global Things */
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('things', (page = 0, limit = 2) => Things.find({}, {
  limit: page * limit + limit
}));
