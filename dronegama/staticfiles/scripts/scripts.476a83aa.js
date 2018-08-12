angular.module("dronegamaWebApp").run(["$templateCache",function(a){"use strict";a.put("views/about.html",'<div class="container"> <h2>Backend</h2> <ul class="list-group"> <li class="list-group-item list-group-item-success">Python</li> <li class="list-group-item list-group-item-success">Django</li> <li class="list-group-item list-group-item-success">Restful API using Django Rest Framework</li> </ul> <h2>Frontend</h2> <ul class="list-group"> <li class="list-group-item list-group-item-info">AngularJS</li> <li class="list-group-item list-group-item-info">Yeoman scaffolding tool</li> <li class="list-group-item list-group-item-info">NodeJS / Node Package Manager (NPM)</li> <li class="list-group-item list-group-item-info">Grunt build tool</li> <li class="list-group-item list-group-item-info">Gulp for angular and other front end dependencies</li> </ul> <h2>Database</h2> <ul class="list-group"> <li class="list-group-item list-group-item-warning">PostGRE SQL</li> </ul> <h2>Others</h2> <ul class="list-group"> <li class="list-group-item list-group-item-danger">Deployed on Heroku which supports one click QA and Production deployment</li> <li class="list-group-item list-group-item-danger">Github</li> </ul> </div>'),a.put("views/company.html",'<div> <h3>Company List</h3> <table class="table"> <thead> <tr> <th>Name</th> <th>Address</th> <th>Phone</th> <th>Introduction</th> </tr> </thead> <tbody> <tr> <td><input type="text"></td> <td><input type="text"></td> <td><input type="text"></td> <td><input type="text"></td> </tr> <tr ng-repeat="company in companies"> <td><a href="/#/company/{{company.faa_id}}">{{company.company_name}}</a></td> <td>{{company.address}}</td> <td>{{company.phone}}</td> <td>{{company.introduction}}</td> </tr> </tbody> </table> </div>'),a.put("views/edit_profile.html",'<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> <div class="container bootstrap snippets"> <div class="row"> <div class="col-xs-12 col-sm-9"> <form class="form-horizontal"> <div class="panel panel-default"> <div class="panel-body text-center"> <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-circle profile-avatar" alt="User avatar"> </div> </div> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title">User info</h4> </div> <div class="panel-body"> <div class="form-group"> <label class="col-sm-2 control-label">Location</label> <div class="col-sm-10"> <select class="form-control"> <option selected>Select country</option> <option>Belgium</option> <option>Canada</option> <option>Denmark</option> <option>Estonia</option> <option>France</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Company name</label> <div class="col-sm-10"> <input type="text" class="form-control"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Position</label> <div class="col-sm-10"> <input type="text" class="form-control"> </div> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title">Contact info</h4> </div> <div class="panel-body"> <div class="form-group"> <label class="col-sm-2 control-label">Work number</label> <div class="col-sm-10"> <input type="tel" class="form-control"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Mobile number</label> <div class="col-sm-10"> <input type="tel" class="form-control"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">E-mail address</label> <div class="col-sm-10"> <input type="email" class="form-control"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">Work address</label> <div class="col-sm-10"> <textarea rows="3" class="form-control"></textarea> </div> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading"> <h4 class="panel-title">Security</h4> </div> <div class="panel-body"> <div class="form-group"> <label class="col-sm-2 control-label">Current password</label> <div class="col-sm-10"> <input type="password" class="form-control"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">New password</label> <div class="col-sm-10"> <input type="password" class="form-control"> </div> </div> <div class="form-group"> <div class="col-sm-10 col-sm-offset-2"> <div class="checkbox"> <input type="checkbox" id="checkbox_1"> <label for="checkbox_1">Make this account public</label> </div> </div> </div> <div class="form-group"> <div class="col-sm-10 col-sm-offset-2"> <button type="submit" class="btn btn-primary">Submit</button> <button type="reset" class="btn btn-default">Cancel</button> </div> </div> </div> </div> </form> </div> </div> </div>'),a.put("views/form.html",'<div class="row"> <div class="container"> <div id="form-container"> <div class="page-header text-center"> <h2>Only a few things to get started...</h2> <!-- the links to our nested states using relative paths --> <!-- add the active class if the state matches our ui-sref --> <div id="status-buttons" class="text-center"> <h4> </h4> </div> </div> <!-- use ng-submit to catch the form submission and use our Angular function --> <form id="signup-form" ng-submit="onFormSubmit()"> <!-- our nested state views will be injected here --> <div id="form-views" ui-view></div> </form> </div> </div> </div>'),a.put("views/form_profile.html",'<div class="form-group"> <label for="business_name">Business Name</label> <input type="text" class="form-control" name="business_name" ng-model="formData.business_name"> </div> <div class="form-group"> <label for="first_name">Your First Name</label> <input type="text" class="form-control" name="first_name" ng-model="formData.first_name"> </div> <div class="form-group"> <label for="last_name">Your Last Name</label> <input type="text" class="form-control" name="last_name" ng-model="formData.last_name"> </div> <div class="form-group"> <label for="email">Email</label> <input type="text" class="form-control" name="email" ng-model="formData.email"> </div> <div class="form-group"> <label for="cell">Cell Phone Number</label> <input type="text" class="form-control" name="cell" ng-model="formData.cell"> </div> <div class="form-group" align="right"> <div class="col-xs-6 col-xs-offset-3"> <a ui-sref="list_business.form.termsandconditions" class="btn btn-block btn-info"> Next Section <span class="glyphicon glyphicon-circle-arrow-right"></span> </a> </div> </div>'),a.put("views/list_business.html",'<div class="container"> <div ng-if="!main.isAuthenticated"> <div ng-controller="ListBusinessCtrl"> <div class="modal fade" id="notLoggedInModal"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h4 class="modal-title">Oh ... what just happened !</h4> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> </div> <div class="modal-body"> <p>You need to have an account. Please login to continue. It will take only two minutes.</p> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> </div> </div> <!-- /.modal-content --> </div> <!-- /.modal-dialog --> </div> <!-- /.modal --> </div> </div> <div ng-if="main.isAuthenticated"> <div ng-controller="ListBusinessCtrl"> <div class="modal fade" id="listBusinessModalSteps"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="redirect(\'/#/\')"><span aria-hidden="true">×</span></button> </div> <div class="modal-body"> <!-- views will be injected here --> <div ui-view> </div> </div> </div> </div> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="container"> main page </div>'),a.put("views/newcompany.html",'<div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Company Name</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.company_name"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Faa Id</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.faa_id"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Introduction</label> <div class="col-xs-10"> <textarea class="form-control" type="text" ng-model="company.introduction"> </textarea> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Address</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.address"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Phone</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.phone"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Primary Contact</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.primary_contact"> </div> </div> <div> <button class="btn btn-primary" ng-click="save()">Save</button> </div> </div>'),a.put("views/packages.html",""),a.put("views/pilots.html",'<div class="container"> hellp </div>'),a.put("views/termsandconditions.html",'<div class="form-group"> <label class="col-xs-3 control-label">Terms of use</label> <div class="col-xs-9"> <div style="border: 1px solid #e5e5e5; height: 200px; overflow: auto; padding: 10px"> <p>Lorem ipsum dolor sit amet, veniam numquam has te. No suas nonumes recusabo mea, est ut graeci definitiones. His ne melius vituperata scriptorem, cum paulo copiosae conclusionemque at. Facer inermis ius in, ad brute nominati referrentur vis. Dicat erant sit ex. Phaedrum imperdiet scribentur vix no, ad latine similique forensibus vel.</p> <p>Dolore populo vivendum vis eu, mei quaestio liberavisse ex. Electram necessitatibus ut vel, quo at probatus oportere, molestie conclusionemque pri cu. Brute augue tincidunt vim id, ne munere fierent rationibus mei. Ut pro volutpat praesent qualisque, an iisque scripta intellegebat eam.</p> <p>Mea ea nonumy labores lobortis, duo quaestio antiopam inimicus et. Ea natum solet iisque quo, prodesset mnesarchum ne vim. Sonet detraxit temporibus no has. Omnium blandit in vim, mea at omnium oblique.</p> <p>Eum ea quidam oportere imperdiet, facer oportere vituperatoribus eu vix, mea ei iisque legendos hendrerit. Blandit comprehensam eu his, ad eros veniam ridens eum. Id odio lobortis elaboraret pro. Vix te fabulas partiendo.</p> <p>Natum oportere et qui, vis graeco tincidunt instructior an, autem elitr noster per et. Mea eu mundi qualisque. Quo nemore nusquam vituperata et, mea ut abhorreant deseruisse, cu nostrud postulant dissentias qui. Postea tincidunt vel eu.</p> <p>Ad eos alia inermis nominavi, eum nibh docendi definitionem no. Ius eu stet mucius nonumes, no mea facilis philosophia necessitatibus. Te eam vidit iisque legendos, vero meliore deserunt ius ea. An qui inimicus inciderint.</p> </div> </div> </div> <div class="form-group"> <div class="col-xs-6 col-xs-offset-3"> <div class="checkbox"> <label> <input type="checkbox" name="agree" value="agree"> Agree with the terms and conditions </label> </div> </div> </div> <div class="row"></div> <button type="submit" class="btn btn-danger">Submit</button>'),a.put("views/viewcompany.html",'<div> <h3>{{company.company_name}}:({{company.faa_id}})</h3> <p> Introduction: {{company.introduction}}<br> Address: {{company.address}}<br> Phone: {{company.phone}}<br> Contact: {{company.primary_contact}}<br> </p> <button class="btn btn-danger" ng-click="delete()">Delete Company</button> <button class="btn btn-primary">Edit</button> </div>')}]);