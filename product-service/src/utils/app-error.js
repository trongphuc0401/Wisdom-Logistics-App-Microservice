const STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED:402,
    FORBIDDEN:403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED:501,
    BAD_GATEWAY:502,
};

class AppError extends Error {
    constructor(
        name,
        statusCode,
        description,
        isOperational,
        errorStack,
        loginErrorResponse
      ) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.errorStack = errorStack;
        this.logError = loginErrorResponse;
        Error.captureStackTrace(this);
      }
}

//500
class APIError extends AppError {
    constructor (
        name,
        statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR,
        description = "Internal Server Error",
        isOperational = true
    ){
        super(name, statusCode, description, isOperational);
    }
}

//400
class BadRequestError extends AppError {
    constructor(description = "Bad request", loginErrorResponse) {
      super(
        "NOT FOUND",
        STATUS_CODES.BAD_REQUEST,
        description,
        true,
        false,
        loginErrorResponse
      );
    }
  }
  //400
class ValidationError extends AppError {
    constructor(description = "Validation Error", errorStack) {
      super(
        "BAD REQUEST",
        STATUS_CODES.BAD_REQUEST,
        description,
        true,
        errorStack
      );
    }
  }

export default {
    AppError,
    APIError,
    BadRequestError,
    ValidationError,
    STATUS_CODES,
  };
