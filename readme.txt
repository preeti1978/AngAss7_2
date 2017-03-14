The emplist component displays the list of employees by using ngFor
There is a link <a href> , provided on each list item in which I pass the route that I want to go, using the routerLink directive.
In emplist.html I also have a <router-outlet> directiev in the place where I want to load the new component on click of the link

In app.routes.ts, I mention the configuration of the modules. If URL is home or "" go to EmplistComponent. If URL is /detail , then DetailviewComponent should load.
I am also passing URL parameters on click of the list item, those parameters are the name, designation and company name of that particlar employee object. 

In the detailview component controller, using ActivatedRoute to read the URL. ActivatedRoute is a service and I am injecting it in the constructor and reading the values of the URL parameters into the Detailview component properties.

These properties are displayed in the Detailview  component view

