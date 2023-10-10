# MCQ

## 1. Write the correct answer from the following options and give an explanation (2-5 lines).
- let greeting;
- greeting = {};
- console.log(greeting);
## Ans: A. {}
 Explanation: In the given code, there is a typo in the variable assignment. Instead of assigning an empty object to the variable greeting, the code assigns it to greeting. As a result, greeting remains undefined, and greeting contains an empty object. When we log greeting, it will display {} in the console.

## 2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
## Ans: C. "12"
 Explanation: In JavaScript, the + operator can be used for both addition and string concatenation. In this case, when calling the sum function with 1 and "2", JavaScript converts the 1 to a string and then concatenates it with "2", resulting in the string "12". So, the function returns "12" as the result.

## 3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
## Ans: A. ["🍕", "🍫", "🥑", "🍔"]
 Explanation: In the provided code, the info object's favoriteFood property is initially assigned the value "🍕", which is the first element of the food array. Later, the value of info.favoriteFood is changed to "🍝". However, this change does not affect the food array in any way. Therefore, when we log food, it will still display ["🍕", "🍫", "🥑", "🍔"], as the array itself remains unchanged.

## 4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
## Ans: B. Hi there, undefined
 Explanation: In the above code, the sayHi function expects a name parameter to be passed when it is called. However, when we call sayHi() without providing an argument, name is undefined within the function. As a result, the function returns "Hi there, undefined," where undefined is the value of the name parameter.

## 5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
## Ans: C. 3
 Explanation: In the given code, the forEach method is used to iterate through the nums array. Inside the callback function, the code checks if the current num is truthy. If a num is not 0, it increments the count by 1. Since there are three truthy values in the nums array (1, 2, and 3), the count variable is incremented three times, resulting in a final value of 3. This value is logged to the console.

# Add at least five bullet points mentioning different features and functionalities of your website.

#### I have created a training event management website for training women. Six services have been provided to the women which are entrepreneurship conference, business development seminar, fashion design boot-camp, vocational workshop, leadership and communication webinar and financial literacy program. Five different features and functionalities of my website is given below:

- **Program Listings:** The website can display a list of all available training programs, with program names, images, descriptions, prices, and schedules. Users can easily browse and explore the programs to find the one that suits their needs.

- **Program Details:** When users click on a specific program, they can access detailed information, including a larger program description, program duration, schedule, and any additional information such as prerequisites or instructor details.

- **Enrollment and Registration:** Users interested in a program can register directly through the website. The website can have a registration form where users provide their details, and, if applicable, pay the program fee online.

- **Search and Filter:** To make it easier for users to find programs that match their preferences, the website can include search and filtering options. Users can search by program name, price range, schedule, or category (e.g., fashion design, business development).

- **Earning rewards:** Allow users to join at the competition at the end of program and to receive position and awards and certificates which boost them for working hard and stepping forward to empower themselves.


These features and functionalities would enhance the user experience and provide valuable information and tools for individuals looking to enroll in vocational training programs.
