angular.module("dronegamaWebApp").run(["$templateCache",function(a){"use strict";a.put("views/about.html",'<div class="container"> <h2>Backend</h2> <ul class="list-group"> <li class="list-group-item list-group-item-success">Python</li> <li class="list-group-item list-group-item-success">Django</li> <li class="list-group-item list-group-item-success">Restful API using Django Rest Framework</li> </ul> <h2>Frontend</h2> <ul class="list-group"> <li class="list-group-item list-group-item-info">AngularJS</li> <li class="list-group-item list-group-item-info">Yeoman scaffolding tool</li> <li class="list-group-item list-group-item-info">NodeJS / Node Package Manager (NPM)</li> <li class="list-group-item list-group-item-info">Grunt build tool</li> <li class="list-group-item list-group-item-info">Gulp for angular and other front end dependencies</li> </ul> <h2>Database</h2> <ul class="list-group"> <li class="list-group-item list-group-item-warning">PostGRE SQL</li> </ul> <h2>Others</h2> <ul class="list-group"> <li class="list-group-item list-group-item-danger">Deployed on Heroku which supports one click QA and Production deployment</li> <li class="list-group-item list-group-item-danger">Github</li> </ul> </div>'),a.put("views/company.html",'<div> <h3>Company List</h3> <table class="table"> <thead> <tr> <th>Name</th> <th>Address</th> <th>Phone</th> <th>Introduction</th> </tr> </thead> <tbody> <tr> <td><input type="text"></td> <td><input type="text"></td> <td><input type="text"></td> <td><input type="text"></td> </tr> <tr ng-repeat="company in companies"> <td><a href="/#/company/{{company.faa_id}}">{{company.company_name}}</a></td> <td>{{company.address}}</td> <td>{{company.phone}}</td> <td>{{company.introduction}}</td> </tr> </tbody> </table> </div>'),a.put("views/form.html",'<div class="row"> <div class="col-sm-8 col-sm-offset-2"> <div id="form-container"> <div class="page-header text-center"> <h2>Only a few things to get started...</h2> <!-- the links to our nested states using relative paths --> <!-- add the active class if the state matches our ui-sref --> <div id="status-buttons" class="text-center"> <a ui-sref-active="active" ui-sref="list_business.form.profile"><span>1</span>Basic Information</a> <a ui-sref-active="active" ui-sref="list_business.form.termsandconditions"><span>2</span>Terms and conditions</a> </div> </div> <!-- use ng-submit to catch the form submission and use our Angular function --> <form id="signup-form" ng-submit="processForm()"> <!-- our nested state views will be injected here --> <div id="form-views" ui-view></div> </form> </div> <!-- show our formData as it is being typed --> <pre>\n    {{ formData }}\n  </pre> </div> </div>'),a.put("views/form_profile.html",'<div class="form-group"> <label for="name">Business Name</label> <input type="text" class="form-control" name="name" ng-model="formData.name"> </div> <div class="form-group"> <label for="name">Your First Name</label> <input type="text" class="form-control" name="name" ng-model="formData.name"> </div> <div class="form-group"> <label for="name">Your Last Name</label> <input type="text" class="form-control" name="name" ng-model="formData.name"> </div> <div class="form-group"> <label for="email">Email</label> <input type="text" class="form-control" name="email" ng-model="formData.email"> </div> <div class="form-group"> <label for="name">Cell Phone Number</label> <input type="text" class="form-control" name="name" ng-model="formData.name"> </div> <div class="form-group row"> <div class="col-xs-6 col-xs-offset-3"> <a ui-sref="form.interests" class="btn btn-block btn-info"> Next Section <span class="glyphicon glyphicon-circle-arrow-right"></span> </a> </div> </div>'),a.put("views/list_business.html",'<div class="container"> <div ng-if="!main.isAuthenticated"> <div ng-controller="ListBusinessCtrl"> <div class="modal fade" id="notLoggedInModal"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> <h4 class="modal-title">Oh ... what just happened !</h4> </div> <div class="modal-body"> <p>You need to have an account. Please login to continue. It will take only two minutes.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> </div> </div> <!-- /.modal-content --> </div> <!-- /.modal-dialog --> </div> <!-- /.modal --> </div> </div> <div ng-if="main.isAuthenticated"> <div ng-controller="ListBusinessCtrl"> <div class="modal fade" id="listBusinessModalSteps"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="redirect(\'/#/\')"><span aria-hidden="true">×</span></button> <h4 class="modal-title">Step 1/4</h4> </div> <div class="modal-body"> <form id="regForm" action="/save_listing"> <!-- views will be injected here --> <div ui-view> <button type="button" class="button" data-toggle="tab" ui-sref="list_business.form" data-target="#list_business.form"><span aria-hidden="true">I am a Pilot</span></button> <button type="button" class="button"><span aria-hidden="true">I want to post a project</span></button> </div> </form> </div> </div> </div> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="container"> main page </div>'),a.put("views/newcompany.html",'<div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Company Name</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.company_name"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Faa Id</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.faa_id"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Introduction</label> <div class="col-xs-10"> <textarea class="form-control" type="text" ng-model="company.introduction"> </textarea> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Address</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.address"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Phone</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.phone"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Primary Contact</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.primary_contact"> </div> </div> <div> <button class="btn btn-primary" ng-click="save()">Save</button> </div> </div>'),a.put("views/packages.html",""),a.put("views/pilots.html",'<div class="container"> hellp </div>'),a.put("views/termsandconditions.html","Terms adn consditions"),a.put("views/viewcompany.html",'<div> <h3>{{company.company_name}}:({{company.faa_id}})</h3> <p> Introduction: {{company.introduction}}<br> Address: {{company.address}}<br> Phone: {{company.phone}}<br> Contact: {{company.primary_contact}}<br> </p> <button class="btn btn-danger" ng-click="delete()">Delete Company</button> <button class="btn btn-primary">Edit</button> </div>')}]);