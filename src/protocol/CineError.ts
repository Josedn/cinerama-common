import { constants as HttpConstants } from "http2";

let errorCodeCount = 4003;
export default class CineError {
  public static readonly NOT_AUTHORIZED = new CineError(
    "Not authorized",
    HttpConstants.HTTP_STATUS_UNAUTHORIZED,
    errorCodeCount++,
  );
  public static readonly INVALID_BODY_FORMAT = new CineError(
    "Invalid body format",
    HttpConstants.HTTP_STATUS_BAD_REQUEST,
    errorCodeCount++,
  );
  public static readonly INVALID_TORRENT = new CineError(
    "Error creating torrent",
    HttpConstants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
    errorCodeCount++,
  );
  public static readonly NOT_FOUND_OR_NOT_ACTIVE_TORRENT = new CineError(
    "Torrent not found or not active",
    HttpConstants.HTTP_STATUS_NOT_FOUND,
    errorCodeCount++,
  );
  public static readonly PAGE_NOT_FOUND = new CineError(
    "Not found",
    HttpConstants.HTTP_STATUS_NOT_FOUND,
    errorCodeCount++,
  );
  public static readonly INVALID_FILE_INDEX = new CineError(
    "Invalid file index",
    HttpConstants.HTTP_STATUS_NOT_FOUND,
    errorCodeCount++,
  );
  public static readonly INVALID_CREDENTIALS = new CineError(
    "Invalid credentials",
    HttpConstants.HTTP_STATUS_UNAUTHORIZED,
    errorCodeCount++,
  );
  constructor(public errorMessage: string, public httpStatusCode: number, public errorCode: number) {}
}
