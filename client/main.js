/* global Things, Waypoint */

import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.page = new ReactiveVar(0);
  Meteor.subscribe('things', this.page);
});

Template.hello.onRendered(function helloOnRendered() {
  new Waypoint({
    element: document.getElementById('waypoint'),
    handler: (direction) => {
      if (/down/i.test(direction)) {
        const page = this.page.get();

        this.page.set(page + 1);
        Meteor.subscribe('things', page + 1);
      }
    }
  });
});

Template.hello.helpers({
  counter() {
  },
  things() {
    return Things.find();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
