# Front-End Test: Users List

## Background

Display a user list UI as in user-list.png

Data should be loaded via AJAX request from https://randomuser.me/ API.

When any user list row is clicked it should expand to show more detail (see user-detail.png)

Tools
- angularjs
- ngResource
- highcharts-ng
- bootstrap3

Requirements

1) User List

* Display the list of users from randomuser.me API with the following information
  - Avatar image
  - Last name	
  - First name	
  - Username	
  - Phone	
  - Location

* Avatar should be rounded
* Rows in the list are striped (alternating colors)

2) User Details

* When user clicks on any one user list row it should expand and show the following additional information:
  - Firsn Name
  - Gender icon
  - Username
  - Registered date
  - Email
  - Location
  - Birthday
  - Phone
  - Cell
  - Bigger avatar image
* When user clicks on an expanded row again it should collapse
* When user clicks to another row the current expanded row should collapse

3) Chart

In the head of the page add button "Show chart"
When user click on "Show chart" button system should open popup and draw chart "Gender of users". (see chart.png)
