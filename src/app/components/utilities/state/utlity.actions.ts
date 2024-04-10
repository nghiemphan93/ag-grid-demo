import { Utility } from '../models/utility';

export namespace UtilityActions {
  export class GetUtilities {
    public static readonly type = '[Utility] GetUtilities';
  }

  export class UpdateUtility {
    public static readonly type = '[Utility] UpdateUtility';

    public constructor(public utility: Utility) {}
  }

  export class DeleteUtility {
    public static readonly type = '[Utility] DeleteUtility';

    public constructor(public utility: Utility) {}
  }
}
