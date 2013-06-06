/* This can be used in Javascript console as well */

jQuery(function ($) {

    var User = Backbone.Model.extend({
        urlRoot: '/users'
    });

    var user = new User({
        name: "Lucas",
        username: "lucasprus",
        id: "333"
    });

    console.info('Name: ', user.get('name'));
    console.info(user.url());

});