# Answers

1. member_address, dinner_date, venue_description, food_code and food_description.

2. members, dinner, and foods

3. | members     | dinner            | foods            | reservations    |
   | ----------- | ----------------- | ---------------- | --------------- |
   | member_id   | dinner_id         | food_code        | reservations_id |
   | member_name | venue_code        | food_description | fk\_(member_id) |
   | zipCode     | venue_description | fk\_(dinner_id)  | fk\_(dinner_id) |
   | street      |                   |                  | date            |
