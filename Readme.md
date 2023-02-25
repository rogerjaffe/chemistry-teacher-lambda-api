Question list being used:

<-- DONE 1 6 7 8 9 10 11 13 14 17 18 19 20 21 22 23 24 25 26 --> 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 43 44 50 51 58 59 60 61 62 63 64 68 69 70 71 72 74 75 76 78 79 84 85 86

Unused in Kiffe's class: 2,3,4,5,12,15,16,42,45,46,47,48,49,52,53,54,55,56,57,65,66,67,73,77,80,81,82,83

Good explanation of how API Gateway mappings work at https://www.alexdebrie.com/posts/api-gateway-elements/#step-3-handling-your-response-with-integration-responses

See `https://github.com/rogerjaffe/githubActionTest/actions/runs/1338719319/workflow`
for an example of using Github actions to automatically deploy a Lambda function when code is pushed.

Inspired from this article `https://blog.jakoblind.no/aws-lambda-github-actions/`

Also see `https://blog.clairvoyantsoft.com/continuous-deployment-of-lambda-functions-f5d930d1937d` for an example of how to use AWS CodePipeline for CI of code.

### Auth system Lambda functions

in /jwt
 createTeacherJwt -> Input: email -> Output: JWT
 validateJwt -> Input: JWT -> Output: true/false

validateNewUser -> Inputs: email, last, first, school, password, salt -> Output: all inputs and error: false

userExists => Input: email, Output: true/false

validateTeacherLogin -> Inputs: email, password -> Output: true/false

validateStudentLogin -> Inputs: id, teacherEmail, password -> Output: true/false

sendConfirmEmail -> Input: email -> Output: confirmationCode

saveConfirmationCode -> Input: confirmationCode -> Output: true/false

sendPasswordResetEmail -> Input: email -> Output: passwordResetConfirmationCode

changePassword -> Input: email, oldPassword, newPassword -> Output: true/false

confirmEmail -> Input: email -> Output: true/false

### Step functions
login -> validateCredentials -> createTeacherJwt

forgotPassword -> sendPasswordResetEmail

changePassword -> changePassword -> createTeacherJwt

createAccount -> createUser -> sendConfirmEmail

[any request] -> validateJwt -> createTeacherJwt
