1.What columns violate 1NF?
- member_address, dinner_date, venue_description, food_code and food_description.

2.What entities do you recognize that could be extracted?
- members, dinner, venues and foods

3.Name all the tables and columns that would make a 3NF compliant solution.

   |members      |     venues        | dinner            |  dinner_includes | foods            | reservations    |
   | ----------- |-----------------  | ----------------- | ---------------- | ---------------- | --------------- |
   | member_id   |     venue_code    | dinner_id         |  fk_(dinner_id)  |food_code         | reservations_id |
   | member_name | venue_description |                   | 	fk_(food_code)  | food_description | fk\_(member_id) |
   | zipCode     |                   |                   |                  |                  | fk\_(dinner_id) |
   | street      |                   |                   |                  |                  | date            |
