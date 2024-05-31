class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}
/* 
Informational responses (100-199)
Successful response (200-299)
Redirectional messages (300-399)
Client error responses(400-499)
Server error responses (500-599)
*/
