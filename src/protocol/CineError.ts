import { StatusCodes } from "http-status-codes";

let errorCodeCount = 4003;
export default class CineError {
  public static readonly NOT_AUTHORIZED = new CineError("Not authorized", StatusCodes.FORBIDDEN, errorCodeCount++);
  public static readonly INVALID_BODY_FORMAT = new CineError(
    "Invalid body format",
    StatusCodes.BAD_REQUEST,
    errorCodeCount++,
  );
  public static readonly INVALID_TORRENT = new CineError(
    "Error creating torrent",
    StatusCodes.INTERNAL_SERVER_ERROR,
    errorCodeCount++,
  );
  public static readonly NOT_FOUND_OR_NOT_ACTIVE_TORRENT = new CineError(
    "Torrent not found or not active",
    StatusCodes.NOT_FOUND,
    errorCodeCount++,
  );
  public static readonly PAGE_NOT_FOUND = new CineError("Not found", StatusCodes.NOT_FOUND, errorCodeCount++);
  public static readonly INVALID_FILE_INDEX = new CineError(
    "Invalid file index",
    StatusCodes.NOT_FOUND,
    errorCodeCount++,
  );
  public static readonly INVALID_CREDENTIALS = new CineError(
    "Invalid credentials",
    StatusCodes.UNAUTHORIZED,
    errorCodeCount++,
  );
  public static readonly INTERNAL_ERROR = new CineError(
    "Something went wrong",
    StatusCodes.INTERNAL_SERVER_ERROR,
    errorCodeCount++,
  );
  constructor(public errorMessage: string, public httpStatusCode: number, public errorCode: number) {}
}
