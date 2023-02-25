Error list from AWS Lambda functions:

`authenticate`:

* `TeacherNotFoundError`
* `EmailNotConfirmedError`
* `AuthenticationFailedError`

`checkAnswer`:

* `QuestionExpiredError`
* `IncorrectAnswerError`

`confirmAccount`:

* `ConfirmationExpired`
* `TeacherNotFoundError`

`createAccount`:

* `InvalidTeacherEmailError`
* `TeacherExistsError`
* `SendConfirmationEmailError`

`getQuestion`:

* `UnknownQuestionError`

`getTeacherList`: No errors

`resetPassword`:

* `TeacherNotFoundError`

