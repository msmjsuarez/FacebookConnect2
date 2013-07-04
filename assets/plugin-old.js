
var plugin = {
    login: function() {
    	var appId = "142735122594738";
        window.plugins.facebookConnect.login({permissions: ["email", "user_about_me", "picture"], appId: appId}, function(result) {
            console.log("facebookConnect.login:" + JSON.stringify(result));
            
            document.getElementById('profile_pic').innerHTML = '<img src="http://graph.facebook.com/' + result.id + '/picture" />';
            document.getElementById('name').innerHTML = 'Full Name: '+ result.name + '<br><br>';
            document.getElementById('gender').innerHTML = 'Gender: '+ result.gender + '<br><br>';
            document.getElementById('email').innerHTML = 'Email: '+ result.email + '<br><br>';
            document.getElementById('quotes').innerHTML = 'Quotes: '+ result.quotes + '<br><br>'; 
            
        });
    },
    requestWithGraphPath: function() {
        window.plugins.facebookConnect.requestWithGraphPath("/me/friends", {fields: 'id, name, picture, email, gender, quotes'}, function(result) {
            console.log("facebookConnect.requestWithGraphPath:" + JSON.stringify(result));
            $('#title').append('<h2>My Friends</h2>');
            result.data.forEach(function(item) {  
            		$('#profile_picf').append('<img src="http://graph.facebook.com/' + item.id + '/picture" />');
                	$('#namef').append('Full Name: '+ item.name + '<br><br>');
                });           
        });
    },
    dialog : function() {
        var dialogOptions = {
            link: 'https://developers.facebook.com/docs/reference/dialogs/',
            picture: 'http://fbrell.com/f8.jpg',
            name: 'Facebook Dialogs',
            caption: 'Reference Documentation',
            description: 'Using Dialogs to interact with users.'
        };

        window.plugins.facebookConnect.dialog('feed', dialogOptions, function(response) {
            console.log("FacebookConnect.dialog:" + JSON.stringify(response));
        });
    },
    logout : function() {
        window.plugins.facebookConnect.logout(function(result) {
            console.log("FacebookConnect.logout:" + JSON.stringify(result));
        });
    }
};
