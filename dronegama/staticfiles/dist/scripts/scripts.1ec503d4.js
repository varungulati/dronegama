angular.module("dronegamaWebApp").run(["$templateCache",function(a){"use strict";a.put("views/about.html","<p>This is the about fffgghf .</p>"),a.put("views/company.html",'<div> <h3>Company List</h3> <table class="table"> <thead> <tr> <th>Name</th> <th>Address</th> <th>Phone</th> <th>Introduction</th> </tr> </thead> <tbody> <tr> <td><input type="text"></td> <td><input type="text"></td> <td><input type="text"></td> <td><input type="text"></td> </tr> <tr ng-repeat="company in companies"> <td><a href="/#/company/{{company.faa_id}}">{{company.company_name}}</a></td> <td>{{company.address}}</td> <td>{{company.phone}}</td> <td>{{company.introduction}}</td> </tr> </tbody> </table> </div>'),a.put("views/main.html",'<div> <table> <thead> <tr> <th>SYMBOL</th> <th>SYMBOL</th> </tr> </thead> <tbody ng-repeat="i in phones"> <tr ng-repeat="e in i.details"> <td>{{$index}}</td> <td>{{e.foo}}</td> </tr> </tbody> </table> </div>'),a.put("views/newcompany.html",'<div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Company Name</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.company_name"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Faa Id</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.faa_id"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Introduction</label> <div class="col-xs-10"> <textarea class="form-control" type="text" ng-model="company.introduction"> </textarea> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Address</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.address"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Phone</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.phone"> </div> </div> <div class="form-group row"> <label class="col-xs-2 col-form-label">Primary Contact</label> <div class="col-xs-10"> <input class="form-control" type="text" ng-model="company.primary_contact"> </div> </div> <div> <button class="btn btn-primary" ng-click="save()">Save</button> </div> </div>'),a.put("views/viewcompany.html",'<div> <h3>{{company.company_name}}:({{company.faa_id}})</h3> <p> Introduction: {{company.introduction}}<br> Address: {{company.address}}<br> Phone: {{company.phone}}<br> Contact: {{company.primary_contact}}<br> </p> <button class="btn btn-danger" ng-click="delete()">Delete Company</button> <button class="btn btn-primary">Edit</button> </div>')}]);