
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ClassRoom
 * 
 */
export type ClassRoom = $Result.DefaultSelection<Prisma.$ClassRoomPayload>
/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model StaffProfile
 * 
 */
export type StaffProfile = $Result.DefaultSelection<Prisma.$StaffProfilePayload>
/**
 * Model GradeRecord
 * 
 */
export type GradeRecord = $Result.DefaultSelection<Prisma.$GradeRecordPayload>
/**
 * Model StudentGrade
 * 
 */
export type StudentGrade = $Result.DefaultSelection<Prisma.$StudentGradePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model StudentAttendance
 * 
 */
export type StudentAttendance = $Result.DefaultSelection<Prisma.$StudentAttendancePayload>
/**
 * Model FeeRecord
 * 
 */
export type FeeRecord = $Result.DefaultSelection<Prisma.$FeeRecordPayload>
/**
 * Model FeeInvoice
 * 
 */
export type FeeInvoice = $Result.DefaultSelection<Prisma.$FeeInvoicePayload>
/**
 * Model PaymentRecord
 * 
 */
export type PaymentRecord = $Result.DefaultSelection<Prisma.$PaymentRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  PRINCIPAL: 'PRINCIPAL',
  BURSAR: 'BURSAR',
  TEACHER: 'TEACHER',
  PARENT: 'PARENT',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CurriculumType: {
  NIGERIAN: 'NIGERIAN',
  BRITISH: 'BRITISH',
  HYBRID: 'HYBRID'
};

export type CurriculumType = (typeof CurriculumType)[keyof typeof CurriculumType]


export const Term: {
  FIRST_TERM: 'FIRST_TERM',
  SECOND_TERM: 'SECOND_TERM',
  THIRD_TERM: 'THIRD_TERM'
};

export type Term = (typeof Term)[keyof typeof Term]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CurriculumType = $Enums.CurriculumType

export const CurriculumType: typeof $Enums.CurriculumType

export type Term = $Enums.Term

export const Term: typeof $Enums.Term

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classRoom`: Exposes CRUD operations for the **ClassRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassRooms
    * const classRooms = await prisma.classRoom.findMany()
    * ```
    */
  get classRoom(): Prisma.ClassRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffProfile`: Exposes CRUD operations for the **StaffProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffProfiles
    * const staffProfiles = await prisma.staffProfile.findMany()
    * ```
    */
  get staffProfile(): Prisma.StaffProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gradeRecord`: Exposes CRUD operations for the **GradeRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GradeRecords
    * const gradeRecords = await prisma.gradeRecord.findMany()
    * ```
    */
  get gradeRecord(): Prisma.GradeRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentGrade`: Exposes CRUD operations for the **StudentGrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentGrades
    * const studentGrades = await prisma.studentGrade.findMany()
    * ```
    */
  get studentGrade(): Prisma.StudentGradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAttendance`: Exposes CRUD operations for the **StudentAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAttendances
    * const studentAttendances = await prisma.studentAttendance.findMany()
    * ```
    */
  get studentAttendance(): Prisma.StudentAttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feeRecord`: Exposes CRUD operations for the **FeeRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeeRecords
    * const feeRecords = await prisma.feeRecord.findMany()
    * ```
    */
  get feeRecord(): Prisma.FeeRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feeInvoice`: Exposes CRUD operations for the **FeeInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeeInvoices
    * const feeInvoices = await prisma.feeInvoice.findMany()
    * ```
    */
  get feeInvoice(): Prisma.FeeInvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentRecord`: Exposes CRUD operations for the **PaymentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRecords
    * const paymentRecords = await prisma.paymentRecord.findMany()
    * ```
    */
  get paymentRecord(): Prisma.PaymentRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ClassRoom: 'ClassRoom',
    StudentProfile: 'StudentProfile',
    StaffProfile: 'StaffProfile',
    GradeRecord: 'GradeRecord',
    StudentGrade: 'StudentGrade',
    Attendance: 'Attendance',
    StudentAttendance: 'StudentAttendance',
    FeeRecord: 'FeeRecord',
    FeeInvoice: 'FeeInvoice',
    PaymentRecord: 'PaymentRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "classRoom" | "studentProfile" | "staffProfile" | "gradeRecord" | "studentGrade" | "attendance" | "studentAttendance" | "feeRecord" | "feeInvoice" | "paymentRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ClassRoom: {
        payload: Prisma.$ClassRoomPayload<ExtArgs>
        fields: Prisma.ClassRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload>
          }
          findFirst: {
            args: Prisma.ClassRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload>
          }
          findMany: {
            args: Prisma.ClassRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload>[]
          }
          create: {
            args: Prisma.ClassRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload>
          }
          createMany: {
            args: Prisma.ClassRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload>[]
          }
          delete: {
            args: Prisma.ClassRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload>
          }
          update: {
            args: Prisma.ClassRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload>
          }
          deleteMany: {
            args: Prisma.ClassRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload>[]
          }
          upsert: {
            args: Prisma.ClassRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassRoomPayload>
          }
          aggregate: {
            args: Prisma.ClassRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassRoom>
          }
          groupBy: {
            args: Prisma.ClassRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ClassRoomCountAggregateOutputType> | number
          }
        }
      }
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      StaffProfile: {
        payload: Prisma.$StaffProfilePayload<ExtArgs>
        fields: Prisma.StaffProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload>
          }
          findFirst: {
            args: Prisma.StaffProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload>
          }
          findMany: {
            args: Prisma.StaffProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload>[]
          }
          create: {
            args: Prisma.StaffProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload>
          }
          createMany: {
            args: Prisma.StaffProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload>[]
          }
          delete: {
            args: Prisma.StaffProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload>
          }
          update: {
            args: Prisma.StaffProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload>
          }
          deleteMany: {
            args: Prisma.StaffProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload>[]
          }
          upsert: {
            args: Prisma.StaffProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffProfilePayload>
          }
          aggregate: {
            args: Prisma.StaffProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffProfile>
          }
          groupBy: {
            args: Prisma.StaffProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StaffProfileCountAggregateOutputType> | number
          }
        }
      }
      GradeRecord: {
        payload: Prisma.$GradeRecordPayload<ExtArgs>
        fields: Prisma.GradeRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradeRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradeRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload>
          }
          findFirst: {
            args: Prisma.GradeRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradeRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload>
          }
          findMany: {
            args: Prisma.GradeRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload>[]
          }
          create: {
            args: Prisma.GradeRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload>
          }
          createMany: {
            args: Prisma.GradeRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GradeRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload>[]
          }
          delete: {
            args: Prisma.GradeRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload>
          }
          update: {
            args: Prisma.GradeRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload>
          }
          deleteMany: {
            args: Prisma.GradeRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradeRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GradeRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload>[]
          }
          upsert: {
            args: Prisma.GradeRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradeRecordPayload>
          }
          aggregate: {
            args: Prisma.GradeRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGradeRecord>
          }
          groupBy: {
            args: Prisma.GradeRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradeRecordCountArgs<ExtArgs>
            result: $Utils.Optional<GradeRecordCountAggregateOutputType> | number
          }
        }
      }
      StudentGrade: {
        payload: Prisma.$StudentGradePayload<ExtArgs>
        fields: Prisma.StudentGradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentGradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentGradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload>
          }
          findFirst: {
            args: Prisma.StudentGradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentGradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload>
          }
          findMany: {
            args: Prisma.StudentGradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload>[]
          }
          create: {
            args: Prisma.StudentGradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload>
          }
          createMany: {
            args: Prisma.StudentGradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentGradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload>[]
          }
          delete: {
            args: Prisma.StudentGradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload>
          }
          update: {
            args: Prisma.StudentGradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload>
          }
          deleteMany: {
            args: Prisma.StudentGradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentGradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentGradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload>[]
          }
          upsert: {
            args: Prisma.StudentGradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentGradePayload>
          }
          aggregate: {
            args: Prisma.StudentGradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentGrade>
          }
          groupBy: {
            args: Prisma.StudentGradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentGradeCountArgs<ExtArgs>
            result: $Utils.Optional<StudentGradeCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      StudentAttendance: {
        payload: Prisma.$StudentAttendancePayload<ExtArgs>
        fields: Prisma.StudentAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload>
          }
          findFirst: {
            args: Prisma.StudentAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload>
          }
          findMany: {
            args: Prisma.StudentAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload>[]
          }
          create: {
            args: Prisma.StudentAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload>
          }
          createMany: {
            args: Prisma.StudentAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentAttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload>[]
          }
          delete: {
            args: Prisma.StudentAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload>
          }
          update: {
            args: Prisma.StudentAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload>
          }
          deleteMany: {
            args: Prisma.StudentAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentAttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload>[]
          }
          upsert: {
            args: Prisma.StudentAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttendancePayload>
          }
          aggregate: {
            args: Prisma.StudentAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAttendance>
          }
          groupBy: {
            args: Prisma.StudentAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAttendanceCountAggregateOutputType> | number
          }
        }
      }
      FeeRecord: {
        payload: Prisma.$FeeRecordPayload<ExtArgs>
        fields: Prisma.FeeRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeeRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeeRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload>
          }
          findFirst: {
            args: Prisma.FeeRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeeRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload>
          }
          findMany: {
            args: Prisma.FeeRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload>[]
          }
          create: {
            args: Prisma.FeeRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload>
          }
          createMany: {
            args: Prisma.FeeRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeeRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload>[]
          }
          delete: {
            args: Prisma.FeeRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload>
          }
          update: {
            args: Prisma.FeeRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload>
          }
          deleteMany: {
            args: Prisma.FeeRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeeRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeeRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload>[]
          }
          upsert: {
            args: Prisma.FeeRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeRecordPayload>
          }
          aggregate: {
            args: Prisma.FeeRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeeRecord>
          }
          groupBy: {
            args: Prisma.FeeRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeeRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeeRecordCountArgs<ExtArgs>
            result: $Utils.Optional<FeeRecordCountAggregateOutputType> | number
          }
        }
      }
      FeeInvoice: {
        payload: Prisma.$FeeInvoicePayload<ExtArgs>
        fields: Prisma.FeeInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeeInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeeInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload>
          }
          findFirst: {
            args: Prisma.FeeInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeeInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload>
          }
          findMany: {
            args: Prisma.FeeInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload>[]
          }
          create: {
            args: Prisma.FeeInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload>
          }
          createMany: {
            args: Prisma.FeeInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeeInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload>[]
          }
          delete: {
            args: Prisma.FeeInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload>
          }
          update: {
            args: Prisma.FeeInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload>
          }
          deleteMany: {
            args: Prisma.FeeInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeeInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeeInvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload>[]
          }
          upsert: {
            args: Prisma.FeeInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeInvoicePayload>
          }
          aggregate: {
            args: Prisma.FeeInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeeInvoice>
          }
          groupBy: {
            args: Prisma.FeeInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeeInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeeInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<FeeInvoiceCountAggregateOutputType> | number
          }
        }
      }
      PaymentRecord: {
        payload: Prisma.$PaymentRecordPayload<ExtArgs>
        fields: Prisma.PaymentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findFirst: {
            args: Prisma.PaymentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findMany: {
            args: Prisma.PaymentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          create: {
            args: Prisma.PaymentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          createMany: {
            args: Prisma.PaymentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          delete: {
            args: Prisma.PaymentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          update: {
            args: Prisma.PaymentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          upsert: {
            args: Prisma.PaymentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          aggregate: {
            args: Prisma.PaymentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentRecord>
          }
          groupBy: {
            args: Prisma.PaymentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    classRoom?: ClassRoomOmit
    studentProfile?: StudentProfileOmit
    staffProfile?: StaffProfileOmit
    gradeRecord?: GradeRecordOmit
    studentGrade?: StudentGradeOmit
    attendance?: AttendanceOmit
    studentAttendance?: StudentAttendanceOmit
    feeRecord?: FeeRecordOmit
    feeInvoice?: FeeInvoiceOmit
    paymentRecord?: PaymentRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClassRoomCountOutputType
   */

  export type ClassRoomCountOutputType = {
    students: number
  }

  export type ClassRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassRoomCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * ClassRoomCountOutputType without action
   */
  export type ClassRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoomCountOutputType
     */
    select?: ClassRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassRoomCountOutputType without action
   */
  export type ClassRoomCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
  }


  /**
   * Count Type StudentProfileCountOutputType
   */

  export type StudentProfileCountOutputType = {
    grades: number
    studentGrade: number
    attendance: number
    studentAttendance: number
    fees: number
    feeInvoice: number
    paymentRecord: number
  }

  export type StudentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grades?: boolean | StudentProfileCountOutputTypeCountGradesArgs
    studentGrade?: boolean | StudentProfileCountOutputTypeCountStudentGradeArgs
    attendance?: boolean | StudentProfileCountOutputTypeCountAttendanceArgs
    studentAttendance?: boolean | StudentProfileCountOutputTypeCountStudentAttendanceArgs
    fees?: boolean | StudentProfileCountOutputTypeCountFeesArgs
    feeInvoice?: boolean | StudentProfileCountOutputTypeCountFeeInvoiceArgs
    paymentRecord?: boolean | StudentProfileCountOutputTypeCountPaymentRecordArgs
  }

  // Custom InputTypes
  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfileCountOutputType
     */
    select?: StudentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountGradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeRecordWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountStudentGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGradeWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountStudentAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAttendanceWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeRecordWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountFeeInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeInvoiceWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountPaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    staffProfile?: boolean | User$staffProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    staffProfile?: boolean | User$staffProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$StudentProfilePayload<ExtArgs> | null
      staffProfile: Prisma.$StaffProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staffProfile<T extends User$staffProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$staffProfileArgs<ExtArgs>>): Prisma__StaffProfileClient<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
  }

  /**
   * User.staffProfile
   */
  export type User$staffProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    where?: StaffProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ClassRoom
   */

  export type AggregateClassRoom = {
    _count: ClassRoomCountAggregateOutputType | null
    _min: ClassRoomMinAggregateOutputType | null
    _max: ClassRoomMaxAggregateOutputType | null
  }

  export type ClassRoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: string | null
    curriculum: $Enums.CurriculumType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassRoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: string | null
    curriculum: $Enums.CurriculumType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassRoomCountAggregateOutputType = {
    id: number
    name: number
    level: number
    curriculum: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassRoomMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    curriculum?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassRoomMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    curriculum?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassRoomCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    curriculum?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassRoom to aggregate.
     */
    where?: ClassRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassRooms to fetch.
     */
    orderBy?: ClassRoomOrderByWithRelationInput | ClassRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassRooms
    **/
    _count?: true | ClassRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassRoomMaxAggregateInputType
  }

  export type GetClassRoomAggregateType<T extends ClassRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateClassRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassRoom[P]>
      : GetScalarType<T[P], AggregateClassRoom[P]>
  }




  export type ClassRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassRoomWhereInput
    orderBy?: ClassRoomOrderByWithAggregationInput | ClassRoomOrderByWithAggregationInput[]
    by: ClassRoomScalarFieldEnum[] | ClassRoomScalarFieldEnum
    having?: ClassRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassRoomCountAggregateInputType | true
    _min?: ClassRoomMinAggregateInputType
    _max?: ClassRoomMaxAggregateInputType
  }

  export type ClassRoomGroupByOutputType = {
    id: string
    name: string
    level: string
    curriculum: $Enums.CurriculumType
    createdAt: Date
    updatedAt: Date
    _count: ClassRoomCountAggregateOutputType | null
    _min: ClassRoomMinAggregateOutputType | null
    _max: ClassRoomMaxAggregateOutputType | null
  }

  type GetClassRoomGroupByPayload<T extends ClassRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ClassRoomGroupByOutputType[P]>
        }
      >
    >


  export type ClassRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    curriculum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    students?: boolean | ClassRoom$studentsArgs<ExtArgs>
    _count?: boolean | ClassRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classRoom"]>

  export type ClassRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    curriculum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["classRoom"]>

  export type ClassRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    curriculum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["classRoom"]>

  export type ClassRoomSelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
    curriculum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level" | "curriculum" | "createdAt" | "updatedAt", ExtArgs["result"]["classRoom"]>
  export type ClassRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassRoom$studentsArgs<ExtArgs>
    _count?: boolean | ClassRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassRoom"
    objects: {
      students: Prisma.$StudentProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      level: string
      curriculum: $Enums.CurriculumType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classRoom"]>
    composites: {}
  }

  type ClassRoomGetPayload<S extends boolean | null | undefined | ClassRoomDefaultArgs> = $Result.GetResult<Prisma.$ClassRoomPayload, S>

  type ClassRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassRoomCountAggregateInputType | true
    }

  export interface ClassRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassRoom'], meta: { name: 'ClassRoom' } }
    /**
     * Find zero or one ClassRoom that matches the filter.
     * @param {ClassRoomFindUniqueArgs} args - Arguments to find a ClassRoom
     * @example
     * // Get one ClassRoom
     * const classRoom = await prisma.classRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassRoomFindUniqueArgs>(args: SelectSubset<T, ClassRoomFindUniqueArgs<ExtArgs>>): Prisma__ClassRoomClient<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassRoomFindUniqueOrThrowArgs} args - Arguments to find a ClassRoom
     * @example
     * // Get one ClassRoom
     * const classRoom = await prisma.classRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassRoomClient<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRoomFindFirstArgs} args - Arguments to find a ClassRoom
     * @example
     * // Get one ClassRoom
     * const classRoom = await prisma.classRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassRoomFindFirstArgs>(args?: SelectSubset<T, ClassRoomFindFirstArgs<ExtArgs>>): Prisma__ClassRoomClient<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRoomFindFirstOrThrowArgs} args - Arguments to find a ClassRoom
     * @example
     * // Get one ClassRoom
     * const classRoom = await prisma.classRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassRoomClient<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassRooms
     * const classRooms = await prisma.classRoom.findMany()
     * 
     * // Get first 10 ClassRooms
     * const classRooms = await prisma.classRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classRoomWithIdOnly = await prisma.classRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassRoomFindManyArgs>(args?: SelectSubset<T, ClassRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassRoom.
     * @param {ClassRoomCreateArgs} args - Arguments to create a ClassRoom.
     * @example
     * // Create one ClassRoom
     * const ClassRoom = await prisma.classRoom.create({
     *   data: {
     *     // ... data to create a ClassRoom
     *   }
     * })
     * 
     */
    create<T extends ClassRoomCreateArgs>(args: SelectSubset<T, ClassRoomCreateArgs<ExtArgs>>): Prisma__ClassRoomClient<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassRooms.
     * @param {ClassRoomCreateManyArgs} args - Arguments to create many ClassRooms.
     * @example
     * // Create many ClassRooms
     * const classRoom = await prisma.classRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassRoomCreateManyArgs>(args?: SelectSubset<T, ClassRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassRooms and returns the data saved in the database.
     * @param {ClassRoomCreateManyAndReturnArgs} args - Arguments to create many ClassRooms.
     * @example
     * // Create many ClassRooms
     * const classRoom = await prisma.classRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassRooms and only return the `id`
     * const classRoomWithIdOnly = await prisma.classRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassRoom.
     * @param {ClassRoomDeleteArgs} args - Arguments to delete one ClassRoom.
     * @example
     * // Delete one ClassRoom
     * const ClassRoom = await prisma.classRoom.delete({
     *   where: {
     *     // ... filter to delete one ClassRoom
     *   }
     * })
     * 
     */
    delete<T extends ClassRoomDeleteArgs>(args: SelectSubset<T, ClassRoomDeleteArgs<ExtArgs>>): Prisma__ClassRoomClient<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassRoom.
     * @param {ClassRoomUpdateArgs} args - Arguments to update one ClassRoom.
     * @example
     * // Update one ClassRoom
     * const classRoom = await prisma.classRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassRoomUpdateArgs>(args: SelectSubset<T, ClassRoomUpdateArgs<ExtArgs>>): Prisma__ClassRoomClient<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassRooms.
     * @param {ClassRoomDeleteManyArgs} args - Arguments to filter ClassRooms to delete.
     * @example
     * // Delete a few ClassRooms
     * const { count } = await prisma.classRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassRoomDeleteManyArgs>(args?: SelectSubset<T, ClassRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassRooms
     * const classRoom = await prisma.classRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassRoomUpdateManyArgs>(args: SelectSubset<T, ClassRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassRooms and returns the data updated in the database.
     * @param {ClassRoomUpdateManyAndReturnArgs} args - Arguments to update many ClassRooms.
     * @example
     * // Update many ClassRooms
     * const classRoom = await prisma.classRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassRooms and only return the `id`
     * const classRoomWithIdOnly = await prisma.classRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassRoom.
     * @param {ClassRoomUpsertArgs} args - Arguments to update or create a ClassRoom.
     * @example
     * // Update or create a ClassRoom
     * const classRoom = await prisma.classRoom.upsert({
     *   create: {
     *     // ... data to create a ClassRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassRoom we want to update
     *   }
     * })
     */
    upsert<T extends ClassRoomUpsertArgs>(args: SelectSubset<T, ClassRoomUpsertArgs<ExtArgs>>): Prisma__ClassRoomClient<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRoomCountArgs} args - Arguments to filter ClassRooms to count.
     * @example
     * // Count the number of ClassRooms
     * const count = await prisma.classRoom.count({
     *   where: {
     *     // ... the filter for the ClassRooms we want to count
     *   }
     * })
    **/
    count<T extends ClassRoomCountArgs>(
      args?: Subset<T, ClassRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassRoomAggregateArgs>(args: Subset<T, ClassRoomAggregateArgs>): Prisma.PrismaPromise<GetClassRoomAggregateType<T>>

    /**
     * Group by ClassRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassRoomGroupByArgs['orderBy'] }
        : { orderBy?: ClassRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassRoom model
   */
  readonly fields: ClassRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends ClassRoom$studentsArgs<ExtArgs> = {}>(args?: Subset<T, ClassRoom$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassRoom model
   */
  interface ClassRoomFieldRefs {
    readonly id: FieldRef<"ClassRoom", 'String'>
    readonly name: FieldRef<"ClassRoom", 'String'>
    readonly level: FieldRef<"ClassRoom", 'String'>
    readonly curriculum: FieldRef<"ClassRoom", 'CurriculumType'>
    readonly createdAt: FieldRef<"ClassRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassRoom findUnique
   */
  export type ClassRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    /**
     * Filter, which ClassRoom to fetch.
     */
    where: ClassRoomWhereUniqueInput
  }

  /**
   * ClassRoom findUniqueOrThrow
   */
  export type ClassRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    /**
     * Filter, which ClassRoom to fetch.
     */
    where: ClassRoomWhereUniqueInput
  }

  /**
   * ClassRoom findFirst
   */
  export type ClassRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    /**
     * Filter, which ClassRoom to fetch.
     */
    where?: ClassRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassRooms to fetch.
     */
    orderBy?: ClassRoomOrderByWithRelationInput | ClassRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassRooms.
     */
    cursor?: ClassRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassRooms.
     */
    distinct?: ClassRoomScalarFieldEnum | ClassRoomScalarFieldEnum[]
  }

  /**
   * ClassRoom findFirstOrThrow
   */
  export type ClassRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    /**
     * Filter, which ClassRoom to fetch.
     */
    where?: ClassRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassRooms to fetch.
     */
    orderBy?: ClassRoomOrderByWithRelationInput | ClassRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassRooms.
     */
    cursor?: ClassRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassRooms.
     */
    distinct?: ClassRoomScalarFieldEnum | ClassRoomScalarFieldEnum[]
  }

  /**
   * ClassRoom findMany
   */
  export type ClassRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    /**
     * Filter, which ClassRooms to fetch.
     */
    where?: ClassRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassRooms to fetch.
     */
    orderBy?: ClassRoomOrderByWithRelationInput | ClassRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassRooms.
     */
    cursor?: ClassRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassRooms.
     */
    distinct?: ClassRoomScalarFieldEnum | ClassRoomScalarFieldEnum[]
  }

  /**
   * ClassRoom create
   */
  export type ClassRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassRoom.
     */
    data: XOR<ClassRoomCreateInput, ClassRoomUncheckedCreateInput>
  }

  /**
   * ClassRoom createMany
   */
  export type ClassRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassRooms.
     */
    data: ClassRoomCreateManyInput | ClassRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassRoom createManyAndReturn
   */
  export type ClassRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ClassRooms.
     */
    data: ClassRoomCreateManyInput | ClassRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassRoom update
   */
  export type ClassRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassRoom.
     */
    data: XOR<ClassRoomUpdateInput, ClassRoomUncheckedUpdateInput>
    /**
     * Choose, which ClassRoom to update.
     */
    where: ClassRoomWhereUniqueInput
  }

  /**
   * ClassRoom updateMany
   */
  export type ClassRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassRooms.
     */
    data: XOR<ClassRoomUpdateManyMutationInput, ClassRoomUncheckedUpdateManyInput>
    /**
     * Filter which ClassRooms to update
     */
    where?: ClassRoomWhereInput
    /**
     * Limit how many ClassRooms to update.
     */
    limit?: number
  }

  /**
   * ClassRoom updateManyAndReturn
   */
  export type ClassRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * The data used to update ClassRooms.
     */
    data: XOR<ClassRoomUpdateManyMutationInput, ClassRoomUncheckedUpdateManyInput>
    /**
     * Filter which ClassRooms to update
     */
    where?: ClassRoomWhereInput
    /**
     * Limit how many ClassRooms to update.
     */
    limit?: number
  }

  /**
   * ClassRoom upsert
   */
  export type ClassRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassRoom to update in case it exists.
     */
    where: ClassRoomWhereUniqueInput
    /**
     * In case the ClassRoom found by the `where` argument doesn't exist, create a new ClassRoom with this data.
     */
    create: XOR<ClassRoomCreateInput, ClassRoomUncheckedCreateInput>
    /**
     * In case the ClassRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassRoomUpdateInput, ClassRoomUncheckedUpdateInput>
  }

  /**
   * ClassRoom delete
   */
  export type ClassRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    /**
     * Filter which ClassRoom to delete.
     */
    where: ClassRoomWhereUniqueInput
  }

  /**
   * ClassRoom deleteMany
   */
  export type ClassRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassRooms to delete
     */
    where?: ClassRoomWhereInput
    /**
     * Limit how many ClassRooms to delete.
     */
    limit?: number
  }

  /**
   * ClassRoom.students
   */
  export type ClassRoom$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    cursor?: StudentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * ClassRoom without action
   */
  export type ClassRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
  }


  /**
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    admissionNumber: string | null
    curriculum: $Enums.CurriculumType | null
    classRoomId: string | null
    currentClass: string | null
    guardianName: string | null
    guardianPhone: string | null
    dateOfBirth: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    admissionNumber: string | null
    curriculum: $Enums.CurriculumType | null
    classRoomId: string | null
    currentClass: string | null
    guardianName: string | null
    guardianPhone: string | null
    dateOfBirth: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    userId: number
    admissionNumber: number
    curriculum: number
    classRoomId: number
    currentClass: number
    guardianName: number
    guardianPhone: number
    dateOfBirth: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    admissionNumber?: true
    curriculum?: true
    classRoomId?: true
    currentClass?: true
    guardianName?: true
    guardianPhone?: true
    dateOfBirth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    admissionNumber?: true
    curriculum?: true
    classRoomId?: true
    currentClass?: true
    guardianName?: true
    guardianPhone?: true
    dateOfBirth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    admissionNumber?: true
    curriculum?: true
    classRoomId?: true
    currentClass?: true
    guardianName?: true
    guardianPhone?: true
    dateOfBirth?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: string
    userId: string
    admissionNumber: string
    curriculum: $Enums.CurriculumType
    classRoomId: string | null
    currentClass: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StudentProfileCountAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    admissionNumber?: boolean
    curriculum?: boolean
    classRoomId?: boolean
    currentClass?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    dateOfBirth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classRoom?: boolean | StudentProfile$classRoomArgs<ExtArgs>
    grades?: boolean | StudentProfile$gradesArgs<ExtArgs>
    studentGrade?: boolean | StudentProfile$studentGradeArgs<ExtArgs>
    attendance?: boolean | StudentProfile$attendanceArgs<ExtArgs>
    studentAttendance?: boolean | StudentProfile$studentAttendanceArgs<ExtArgs>
    fees?: boolean | StudentProfile$feesArgs<ExtArgs>
    feeInvoice?: boolean | StudentProfile$feeInvoiceArgs<ExtArgs>
    paymentRecord?: boolean | StudentProfile$paymentRecordArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    admissionNumber?: boolean
    curriculum?: boolean
    classRoomId?: boolean
    currentClass?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    dateOfBirth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classRoom?: boolean | StudentProfile$classRoomArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    admissionNumber?: boolean
    curriculum?: boolean
    classRoomId?: boolean
    currentClass?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    dateOfBirth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    classRoom?: boolean | StudentProfile$classRoomArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    admissionNumber?: boolean
    curriculum?: boolean
    classRoomId?: boolean
    currentClass?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    dateOfBirth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "admissionNumber" | "curriculum" | "classRoomId" | "currentClass" | "guardianName" | "guardianPhone" | "dateOfBirth" | "createdAt" | "updatedAt", ExtArgs["result"]["studentProfile"]>
  export type StudentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classRoom?: boolean | StudentProfile$classRoomArgs<ExtArgs>
    grades?: boolean | StudentProfile$gradesArgs<ExtArgs>
    studentGrade?: boolean | StudentProfile$studentGradeArgs<ExtArgs>
    attendance?: boolean | StudentProfile$attendanceArgs<ExtArgs>
    studentAttendance?: boolean | StudentProfile$studentAttendanceArgs<ExtArgs>
    fees?: boolean | StudentProfile$feesArgs<ExtArgs>
    feeInvoice?: boolean | StudentProfile$feeInvoiceArgs<ExtArgs>
    paymentRecord?: boolean | StudentProfile$paymentRecordArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classRoom?: boolean | StudentProfile$classRoomArgs<ExtArgs>
  }
  export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    classRoom?: boolean | StudentProfile$classRoomArgs<ExtArgs>
  }

  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      classRoom: Prisma.$ClassRoomPayload<ExtArgs> | null
      grades: Prisma.$GradeRecordPayload<ExtArgs>[]
      studentGrade: Prisma.$StudentGradePayload<ExtArgs>[]
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      studentAttendance: Prisma.$StudentAttendancePayload<ExtArgs>[]
      fees: Prisma.$FeeRecordPayload<ExtArgs>[]
      feeInvoice: Prisma.$FeeInvoicePayload<ExtArgs>[]
      paymentRecord: Prisma.$PaymentRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      admissionNumber: string
      curriculum: $Enums.CurriculumType
      classRoomId: string | null
      currentClass: string | null
      guardianName: string
      guardianPhone: string
      dateOfBirth: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classRoom<T extends StudentProfile$classRoomArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$classRoomArgs<ExtArgs>>): Prisma__ClassRoomClient<$Result.GetResult<Prisma.$ClassRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    grades<T extends StudentProfile$gradesArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$gradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentGrade<T extends StudentProfile$studentGradeArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$studentGradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendance<T extends StudentProfile$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentAttendance<T extends StudentProfile$studentAttendanceArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$studentAttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fees<T extends StudentProfile$feesArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$feesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feeInvoice<T extends StudentProfile$feeInvoiceArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$feeInvoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentRecord<T extends StudentProfile$paymentRecordArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$paymentRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentProfile model
   */
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'String'>
    readonly userId: FieldRef<"StudentProfile", 'String'>
    readonly admissionNumber: FieldRef<"StudentProfile", 'String'>
    readonly curriculum: FieldRef<"StudentProfile", 'CurriculumType'>
    readonly classRoomId: FieldRef<"StudentProfile", 'String'>
    readonly currentClass: FieldRef<"StudentProfile", 'String'>
    readonly guardianName: FieldRef<"StudentProfile", 'String'>
    readonly guardianPhone: FieldRef<"StudentProfile", 'String'>
    readonly dateOfBirth: FieldRef<"StudentProfile", 'DateTime'>
    readonly createdAt: FieldRef<"StudentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile updateManyAndReturn
   */
  export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfile.classRoom
   */
  export type StudentProfile$classRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassRoom
     */
    select?: ClassRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassRoom
     */
    omit?: ClassRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassRoomInclude<ExtArgs> | null
    where?: ClassRoomWhereInput
  }

  /**
   * StudentProfile.grades
   */
  export type StudentProfile$gradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    where?: GradeRecordWhereInput
    orderBy?: GradeRecordOrderByWithRelationInput | GradeRecordOrderByWithRelationInput[]
    cursor?: GradeRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeRecordScalarFieldEnum | GradeRecordScalarFieldEnum[]
  }

  /**
   * StudentProfile.studentGrade
   */
  export type StudentProfile$studentGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    where?: StudentGradeWhereInput
    orderBy?: StudentGradeOrderByWithRelationInput | StudentGradeOrderByWithRelationInput[]
    cursor?: StudentGradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentGradeScalarFieldEnum | StudentGradeScalarFieldEnum[]
  }

  /**
   * StudentProfile.attendance
   */
  export type StudentProfile$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * StudentProfile.studentAttendance
   */
  export type StudentProfile$studentAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    where?: StudentAttendanceWhereInput
    orderBy?: StudentAttendanceOrderByWithRelationInput | StudentAttendanceOrderByWithRelationInput[]
    cursor?: StudentAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAttendanceScalarFieldEnum | StudentAttendanceScalarFieldEnum[]
  }

  /**
   * StudentProfile.fees
   */
  export type StudentProfile$feesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    where?: FeeRecordWhereInput
    orderBy?: FeeRecordOrderByWithRelationInput | FeeRecordOrderByWithRelationInput[]
    cursor?: FeeRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeeRecordScalarFieldEnum | FeeRecordScalarFieldEnum[]
  }

  /**
   * StudentProfile.feeInvoice
   */
  export type StudentProfile$feeInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    where?: FeeInvoiceWhereInput
    orderBy?: FeeInvoiceOrderByWithRelationInput | FeeInvoiceOrderByWithRelationInput[]
    cursor?: FeeInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeeInvoiceScalarFieldEnum | FeeInvoiceScalarFieldEnum[]
  }

  /**
   * StudentProfile.paymentRecord
   */
  export type StudentProfile$paymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    cursor?: PaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
  }


  /**
   * Model StaffProfile
   */

  export type AggregateStaffProfile = {
    _count: StaffProfileCountAggregateOutputType | null
    _min: StaffProfileMinAggregateOutputType | null
    _max: StaffProfileMaxAggregateOutputType | null
  }

  export type StaffProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    staffId: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    staffId: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffProfileCountAggregateOutputType = {
    id: number
    userId: number
    staffId: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffProfileMinAggregateInputType = {
    id?: true
    userId?: true
    staffId?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    staffId?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffProfileCountAggregateInputType = {
    id?: true
    userId?: true
    staffId?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffProfile to aggregate.
     */
    where?: StaffProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffProfiles to fetch.
     */
    orderBy?: StaffProfileOrderByWithRelationInput | StaffProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffProfiles
    **/
    _count?: true | StaffProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffProfileMaxAggregateInputType
  }

  export type GetStaffProfileAggregateType<T extends StaffProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffProfile[P]>
      : GetScalarType<T[P], AggregateStaffProfile[P]>
  }




  export type StaffProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffProfileWhereInput
    orderBy?: StaffProfileOrderByWithAggregationInput | StaffProfileOrderByWithAggregationInput[]
    by: StaffProfileScalarFieldEnum[] | StaffProfileScalarFieldEnum
    having?: StaffProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffProfileCountAggregateInputType | true
    _min?: StaffProfileMinAggregateInputType
    _max?: StaffProfileMaxAggregateInputType
  }

  export type StaffProfileGroupByOutputType = {
    id: string
    userId: string
    staffId: string
    department: string
    createdAt: Date
    updatedAt: Date
    _count: StaffProfileCountAggregateOutputType | null
    _min: StaffProfileMinAggregateOutputType | null
    _max: StaffProfileMaxAggregateOutputType | null
  }

  type GetStaffProfileGroupByPayload<T extends StaffProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StaffProfileGroupByOutputType[P]>
        }
      >
    >


  export type StaffProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    staffId?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffProfile"]>

  export type StaffProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    staffId?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffProfile"]>

  export type StaffProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    staffId?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffProfile"]>

  export type StaffProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    staffId?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "staffId" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["staffProfile"]>
  export type StaffProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StaffProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      staffId: string
      department: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staffProfile"]>
    composites: {}
  }

  type StaffProfileGetPayload<S extends boolean | null | undefined | StaffProfileDefaultArgs> = $Result.GetResult<Prisma.$StaffProfilePayload, S>

  type StaffProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffProfileCountAggregateInputType | true
    }

  export interface StaffProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffProfile'], meta: { name: 'StaffProfile' } }
    /**
     * Find zero or one StaffProfile that matches the filter.
     * @param {StaffProfileFindUniqueArgs} args - Arguments to find a StaffProfile
     * @example
     * // Get one StaffProfile
     * const staffProfile = await prisma.staffProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffProfileFindUniqueArgs>(args: SelectSubset<T, StaffProfileFindUniqueArgs<ExtArgs>>): Prisma__StaffProfileClient<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffProfileFindUniqueOrThrowArgs} args - Arguments to find a StaffProfile
     * @example
     * // Get one StaffProfile
     * const staffProfile = await prisma.staffProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffProfileClient<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffProfileFindFirstArgs} args - Arguments to find a StaffProfile
     * @example
     * // Get one StaffProfile
     * const staffProfile = await prisma.staffProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffProfileFindFirstArgs>(args?: SelectSubset<T, StaffProfileFindFirstArgs<ExtArgs>>): Prisma__StaffProfileClient<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffProfileFindFirstOrThrowArgs} args - Arguments to find a StaffProfile
     * @example
     * // Get one StaffProfile
     * const staffProfile = await prisma.staffProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffProfileClient<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffProfiles
     * const staffProfiles = await prisma.staffProfile.findMany()
     * 
     * // Get first 10 StaffProfiles
     * const staffProfiles = await prisma.staffProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffProfileWithIdOnly = await prisma.staffProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffProfileFindManyArgs>(args?: SelectSubset<T, StaffProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffProfile.
     * @param {StaffProfileCreateArgs} args - Arguments to create a StaffProfile.
     * @example
     * // Create one StaffProfile
     * const StaffProfile = await prisma.staffProfile.create({
     *   data: {
     *     // ... data to create a StaffProfile
     *   }
     * })
     * 
     */
    create<T extends StaffProfileCreateArgs>(args: SelectSubset<T, StaffProfileCreateArgs<ExtArgs>>): Prisma__StaffProfileClient<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffProfiles.
     * @param {StaffProfileCreateManyArgs} args - Arguments to create many StaffProfiles.
     * @example
     * // Create many StaffProfiles
     * const staffProfile = await prisma.staffProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffProfileCreateManyArgs>(args?: SelectSubset<T, StaffProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffProfiles and returns the data saved in the database.
     * @param {StaffProfileCreateManyAndReturnArgs} args - Arguments to create many StaffProfiles.
     * @example
     * // Create many StaffProfiles
     * const staffProfile = await prisma.staffProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffProfiles and only return the `id`
     * const staffProfileWithIdOnly = await prisma.staffProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffProfile.
     * @param {StaffProfileDeleteArgs} args - Arguments to delete one StaffProfile.
     * @example
     * // Delete one StaffProfile
     * const StaffProfile = await prisma.staffProfile.delete({
     *   where: {
     *     // ... filter to delete one StaffProfile
     *   }
     * })
     * 
     */
    delete<T extends StaffProfileDeleteArgs>(args: SelectSubset<T, StaffProfileDeleteArgs<ExtArgs>>): Prisma__StaffProfileClient<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffProfile.
     * @param {StaffProfileUpdateArgs} args - Arguments to update one StaffProfile.
     * @example
     * // Update one StaffProfile
     * const staffProfile = await prisma.staffProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffProfileUpdateArgs>(args: SelectSubset<T, StaffProfileUpdateArgs<ExtArgs>>): Prisma__StaffProfileClient<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffProfiles.
     * @param {StaffProfileDeleteManyArgs} args - Arguments to filter StaffProfiles to delete.
     * @example
     * // Delete a few StaffProfiles
     * const { count } = await prisma.staffProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffProfileDeleteManyArgs>(args?: SelectSubset<T, StaffProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffProfiles
     * const staffProfile = await prisma.staffProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffProfileUpdateManyArgs>(args: SelectSubset<T, StaffProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffProfiles and returns the data updated in the database.
     * @param {StaffProfileUpdateManyAndReturnArgs} args - Arguments to update many StaffProfiles.
     * @example
     * // Update many StaffProfiles
     * const staffProfile = await prisma.staffProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffProfiles and only return the `id`
     * const staffProfileWithIdOnly = await prisma.staffProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffProfile.
     * @param {StaffProfileUpsertArgs} args - Arguments to update or create a StaffProfile.
     * @example
     * // Update or create a StaffProfile
     * const staffProfile = await prisma.staffProfile.upsert({
     *   create: {
     *     // ... data to create a StaffProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffProfile we want to update
     *   }
     * })
     */
    upsert<T extends StaffProfileUpsertArgs>(args: SelectSubset<T, StaffProfileUpsertArgs<ExtArgs>>): Prisma__StaffProfileClient<$Result.GetResult<Prisma.$StaffProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffProfileCountArgs} args - Arguments to filter StaffProfiles to count.
     * @example
     * // Count the number of StaffProfiles
     * const count = await prisma.staffProfile.count({
     *   where: {
     *     // ... the filter for the StaffProfiles we want to count
     *   }
     * })
    **/
    count<T extends StaffProfileCountArgs>(
      args?: Subset<T, StaffProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffProfileAggregateArgs>(args: Subset<T, StaffProfileAggregateArgs>): Prisma.PrismaPromise<GetStaffProfileAggregateType<T>>

    /**
     * Group by StaffProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffProfileGroupByArgs['orderBy'] }
        : { orderBy?: StaffProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffProfile model
   */
  readonly fields: StaffProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaffProfile model
   */
  interface StaffProfileFieldRefs {
    readonly id: FieldRef<"StaffProfile", 'String'>
    readonly userId: FieldRef<"StaffProfile", 'String'>
    readonly staffId: FieldRef<"StaffProfile", 'String'>
    readonly department: FieldRef<"StaffProfile", 'String'>
    readonly createdAt: FieldRef<"StaffProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffProfile findUnique
   */
  export type StaffProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    /**
     * Filter, which StaffProfile to fetch.
     */
    where: StaffProfileWhereUniqueInput
  }

  /**
   * StaffProfile findUniqueOrThrow
   */
  export type StaffProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    /**
     * Filter, which StaffProfile to fetch.
     */
    where: StaffProfileWhereUniqueInput
  }

  /**
   * StaffProfile findFirst
   */
  export type StaffProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    /**
     * Filter, which StaffProfile to fetch.
     */
    where?: StaffProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffProfiles to fetch.
     */
    orderBy?: StaffProfileOrderByWithRelationInput | StaffProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffProfiles.
     */
    cursor?: StaffProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffProfiles.
     */
    distinct?: StaffProfileScalarFieldEnum | StaffProfileScalarFieldEnum[]
  }

  /**
   * StaffProfile findFirstOrThrow
   */
  export type StaffProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    /**
     * Filter, which StaffProfile to fetch.
     */
    where?: StaffProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffProfiles to fetch.
     */
    orderBy?: StaffProfileOrderByWithRelationInput | StaffProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffProfiles.
     */
    cursor?: StaffProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffProfiles.
     */
    distinct?: StaffProfileScalarFieldEnum | StaffProfileScalarFieldEnum[]
  }

  /**
   * StaffProfile findMany
   */
  export type StaffProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    /**
     * Filter, which StaffProfiles to fetch.
     */
    where?: StaffProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffProfiles to fetch.
     */
    orderBy?: StaffProfileOrderByWithRelationInput | StaffProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffProfiles.
     */
    cursor?: StaffProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffProfiles.
     */
    distinct?: StaffProfileScalarFieldEnum | StaffProfileScalarFieldEnum[]
  }

  /**
   * StaffProfile create
   */
  export type StaffProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffProfile.
     */
    data: XOR<StaffProfileCreateInput, StaffProfileUncheckedCreateInput>
  }

  /**
   * StaffProfile createMany
   */
  export type StaffProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffProfiles.
     */
    data: StaffProfileCreateManyInput | StaffProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffProfile createManyAndReturn
   */
  export type StaffProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StaffProfiles.
     */
    data: StaffProfileCreateManyInput | StaffProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffProfile update
   */
  export type StaffProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffProfile.
     */
    data: XOR<StaffProfileUpdateInput, StaffProfileUncheckedUpdateInput>
    /**
     * Choose, which StaffProfile to update.
     */
    where: StaffProfileWhereUniqueInput
  }

  /**
   * StaffProfile updateMany
   */
  export type StaffProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffProfiles.
     */
    data: XOR<StaffProfileUpdateManyMutationInput, StaffProfileUncheckedUpdateManyInput>
    /**
     * Filter which StaffProfiles to update
     */
    where?: StaffProfileWhereInput
    /**
     * Limit how many StaffProfiles to update.
     */
    limit?: number
  }

  /**
   * StaffProfile updateManyAndReturn
   */
  export type StaffProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * The data used to update StaffProfiles.
     */
    data: XOR<StaffProfileUpdateManyMutationInput, StaffProfileUncheckedUpdateManyInput>
    /**
     * Filter which StaffProfiles to update
     */
    where?: StaffProfileWhereInput
    /**
     * Limit how many StaffProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffProfile upsert
   */
  export type StaffProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffProfile to update in case it exists.
     */
    where: StaffProfileWhereUniqueInput
    /**
     * In case the StaffProfile found by the `where` argument doesn't exist, create a new StaffProfile with this data.
     */
    create: XOR<StaffProfileCreateInput, StaffProfileUncheckedCreateInput>
    /**
     * In case the StaffProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffProfileUpdateInput, StaffProfileUncheckedUpdateInput>
  }

  /**
   * StaffProfile delete
   */
  export type StaffProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
    /**
     * Filter which StaffProfile to delete.
     */
    where: StaffProfileWhereUniqueInput
  }

  /**
   * StaffProfile deleteMany
   */
  export type StaffProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffProfiles to delete
     */
    where?: StaffProfileWhereInput
    /**
     * Limit how many StaffProfiles to delete.
     */
    limit?: number
  }

  /**
   * StaffProfile without action
   */
  export type StaffProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffProfile
     */
    select?: StaffProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffProfile
     */
    omit?: StaffProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffProfileInclude<ExtArgs> | null
  }


  /**
   * Model GradeRecord
   */

  export type AggregateGradeRecord = {
    _count: GradeRecordCountAggregateOutputType | null
    _avg: GradeRecordAvgAggregateOutputType | null
    _sum: GradeRecordSumAggregateOutputType | null
    _min: GradeRecordMinAggregateOutputType | null
    _max: GradeRecordMaxAggregateOutputType | null
  }

  export type GradeRecordAvgAggregateOutputType = {
    caScore: number | null
    examScore: number | null
  }

  export type GradeRecordSumAggregateOutputType = {
    caScore: number | null
    examScore: number | null
  }

  export type GradeRecordMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    subject: string | null
    term: $Enums.Term | null
    session: string | null
    caScore: number | null
    examScore: number | null
    britishGrade: string | null
    curriculumType: $Enums.CurriculumType | null
    createdAt: Date | null
  }

  export type GradeRecordMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    subject: string | null
    term: $Enums.Term | null
    session: string | null
    caScore: number | null
    examScore: number | null
    britishGrade: string | null
    curriculumType: $Enums.CurriculumType | null
    createdAt: Date | null
  }

  export type GradeRecordCountAggregateOutputType = {
    id: number
    studentId: number
    subject: number
    term: number
    session: number
    caScore: number
    examScore: number
    britishGrade: number
    curriculumType: number
    createdAt: number
    _all: number
  }


  export type GradeRecordAvgAggregateInputType = {
    caScore?: true
    examScore?: true
  }

  export type GradeRecordSumAggregateInputType = {
    caScore?: true
    examScore?: true
  }

  export type GradeRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    term?: true
    session?: true
    caScore?: true
    examScore?: true
    britishGrade?: true
    curriculumType?: true
    createdAt?: true
  }

  export type GradeRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    term?: true
    session?: true
    caScore?: true
    examScore?: true
    britishGrade?: true
    curriculumType?: true
    createdAt?: true
  }

  export type GradeRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    term?: true
    session?: true
    caScore?: true
    examScore?: true
    britishGrade?: true
    curriculumType?: true
    createdAt?: true
    _all?: true
  }

  export type GradeRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradeRecord to aggregate.
     */
    where?: GradeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradeRecords to fetch.
     */
    orderBy?: GradeRecordOrderByWithRelationInput | GradeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GradeRecords
    **/
    _count?: true | GradeRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeRecordMaxAggregateInputType
  }

  export type GetGradeRecordAggregateType<T extends GradeRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateGradeRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGradeRecord[P]>
      : GetScalarType<T[P], AggregateGradeRecord[P]>
  }




  export type GradeRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeRecordWhereInput
    orderBy?: GradeRecordOrderByWithAggregationInput | GradeRecordOrderByWithAggregationInput[]
    by: GradeRecordScalarFieldEnum[] | GradeRecordScalarFieldEnum
    having?: GradeRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeRecordCountAggregateInputType | true
    _avg?: GradeRecordAvgAggregateInputType
    _sum?: GradeRecordSumAggregateInputType
    _min?: GradeRecordMinAggregateInputType
    _max?: GradeRecordMaxAggregateInputType
  }

  export type GradeRecordGroupByOutputType = {
    id: string
    studentId: string
    subject: string
    term: $Enums.Term
    session: string
    caScore: number | null
    examScore: number | null
    britishGrade: string | null
    curriculumType: $Enums.CurriculumType
    createdAt: Date
    _count: GradeRecordCountAggregateOutputType | null
    _avg: GradeRecordAvgAggregateOutputType | null
    _sum: GradeRecordSumAggregateOutputType | null
    _min: GradeRecordMinAggregateOutputType | null
    _max: GradeRecordMaxAggregateOutputType | null
  }

  type GetGradeRecordGroupByPayload<T extends GradeRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeRecordGroupByOutputType[P]>
            : GetScalarType<T[P], GradeRecordGroupByOutputType[P]>
        }
      >
    >


  export type GradeRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    session?: boolean
    caScore?: boolean
    examScore?: boolean
    britishGrade?: boolean
    curriculumType?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradeRecord"]>

  export type GradeRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    session?: boolean
    caScore?: boolean
    examScore?: boolean
    britishGrade?: boolean
    curriculumType?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradeRecord"]>

  export type GradeRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    session?: boolean
    caScore?: boolean
    examScore?: boolean
    britishGrade?: boolean
    curriculumType?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradeRecord"]>

  export type GradeRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    session?: boolean
    caScore?: boolean
    examScore?: boolean
    britishGrade?: boolean
    curriculumType?: boolean
    createdAt?: boolean
  }

  export type GradeRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subject" | "term" | "session" | "caScore" | "examScore" | "britishGrade" | "curriculumType" | "createdAt", ExtArgs["result"]["gradeRecord"]>
  export type GradeRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type GradeRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type GradeRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $GradeRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GradeRecord"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      subject: string
      term: $Enums.Term
      session: string
      caScore: number | null
      examScore: number | null
      britishGrade: string | null
      curriculumType: $Enums.CurriculumType
      createdAt: Date
    }, ExtArgs["result"]["gradeRecord"]>
    composites: {}
  }

  type GradeRecordGetPayload<S extends boolean | null | undefined | GradeRecordDefaultArgs> = $Result.GetResult<Prisma.$GradeRecordPayload, S>

  type GradeRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradeRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradeRecordCountAggregateInputType | true
    }

  export interface GradeRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GradeRecord'], meta: { name: 'GradeRecord' } }
    /**
     * Find zero or one GradeRecord that matches the filter.
     * @param {GradeRecordFindUniqueArgs} args - Arguments to find a GradeRecord
     * @example
     * // Get one GradeRecord
     * const gradeRecord = await prisma.gradeRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradeRecordFindUniqueArgs>(args: SelectSubset<T, GradeRecordFindUniqueArgs<ExtArgs>>): Prisma__GradeRecordClient<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GradeRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradeRecordFindUniqueOrThrowArgs} args - Arguments to find a GradeRecord
     * @example
     * // Get one GradeRecord
     * const gradeRecord = await prisma.gradeRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradeRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, GradeRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradeRecordClient<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradeRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeRecordFindFirstArgs} args - Arguments to find a GradeRecord
     * @example
     * // Get one GradeRecord
     * const gradeRecord = await prisma.gradeRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradeRecordFindFirstArgs>(args?: SelectSubset<T, GradeRecordFindFirstArgs<ExtArgs>>): Prisma__GradeRecordClient<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradeRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeRecordFindFirstOrThrowArgs} args - Arguments to find a GradeRecord
     * @example
     * // Get one GradeRecord
     * const gradeRecord = await prisma.gradeRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradeRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, GradeRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradeRecordClient<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GradeRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GradeRecords
     * const gradeRecords = await prisma.gradeRecord.findMany()
     * 
     * // Get first 10 GradeRecords
     * const gradeRecords = await prisma.gradeRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeRecordWithIdOnly = await prisma.gradeRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradeRecordFindManyArgs>(args?: SelectSubset<T, GradeRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GradeRecord.
     * @param {GradeRecordCreateArgs} args - Arguments to create a GradeRecord.
     * @example
     * // Create one GradeRecord
     * const GradeRecord = await prisma.gradeRecord.create({
     *   data: {
     *     // ... data to create a GradeRecord
     *   }
     * })
     * 
     */
    create<T extends GradeRecordCreateArgs>(args: SelectSubset<T, GradeRecordCreateArgs<ExtArgs>>): Prisma__GradeRecordClient<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GradeRecords.
     * @param {GradeRecordCreateManyArgs} args - Arguments to create many GradeRecords.
     * @example
     * // Create many GradeRecords
     * const gradeRecord = await prisma.gradeRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradeRecordCreateManyArgs>(args?: SelectSubset<T, GradeRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GradeRecords and returns the data saved in the database.
     * @param {GradeRecordCreateManyAndReturnArgs} args - Arguments to create many GradeRecords.
     * @example
     * // Create many GradeRecords
     * const gradeRecord = await prisma.gradeRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GradeRecords and only return the `id`
     * const gradeRecordWithIdOnly = await prisma.gradeRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GradeRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, GradeRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GradeRecord.
     * @param {GradeRecordDeleteArgs} args - Arguments to delete one GradeRecord.
     * @example
     * // Delete one GradeRecord
     * const GradeRecord = await prisma.gradeRecord.delete({
     *   where: {
     *     // ... filter to delete one GradeRecord
     *   }
     * })
     * 
     */
    delete<T extends GradeRecordDeleteArgs>(args: SelectSubset<T, GradeRecordDeleteArgs<ExtArgs>>): Prisma__GradeRecordClient<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GradeRecord.
     * @param {GradeRecordUpdateArgs} args - Arguments to update one GradeRecord.
     * @example
     * // Update one GradeRecord
     * const gradeRecord = await prisma.gradeRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradeRecordUpdateArgs>(args: SelectSubset<T, GradeRecordUpdateArgs<ExtArgs>>): Prisma__GradeRecordClient<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GradeRecords.
     * @param {GradeRecordDeleteManyArgs} args - Arguments to filter GradeRecords to delete.
     * @example
     * // Delete a few GradeRecords
     * const { count } = await prisma.gradeRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradeRecordDeleteManyArgs>(args?: SelectSubset<T, GradeRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GradeRecords
     * const gradeRecord = await prisma.gradeRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradeRecordUpdateManyArgs>(args: SelectSubset<T, GradeRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradeRecords and returns the data updated in the database.
     * @param {GradeRecordUpdateManyAndReturnArgs} args - Arguments to update many GradeRecords.
     * @example
     * // Update many GradeRecords
     * const gradeRecord = await prisma.gradeRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GradeRecords and only return the `id`
     * const gradeRecordWithIdOnly = await prisma.gradeRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GradeRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, GradeRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GradeRecord.
     * @param {GradeRecordUpsertArgs} args - Arguments to update or create a GradeRecord.
     * @example
     * // Update or create a GradeRecord
     * const gradeRecord = await prisma.gradeRecord.upsert({
     *   create: {
     *     // ... data to create a GradeRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GradeRecord we want to update
     *   }
     * })
     */
    upsert<T extends GradeRecordUpsertArgs>(args: SelectSubset<T, GradeRecordUpsertArgs<ExtArgs>>): Prisma__GradeRecordClient<$Result.GetResult<Prisma.$GradeRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GradeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeRecordCountArgs} args - Arguments to filter GradeRecords to count.
     * @example
     * // Count the number of GradeRecords
     * const count = await prisma.gradeRecord.count({
     *   where: {
     *     // ... the filter for the GradeRecords we want to count
     *   }
     * })
    **/
    count<T extends GradeRecordCountArgs>(
      args?: Subset<T, GradeRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GradeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GradeRecordAggregateArgs>(args: Subset<T, GradeRecordAggregateArgs>): Prisma.PrismaPromise<GetGradeRecordAggregateType<T>>

    /**
     * Group by GradeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GradeRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeRecordGroupByArgs['orderBy'] }
        : { orderBy?: GradeRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GradeRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GradeRecord model
   */
  readonly fields: GradeRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GradeRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradeRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GradeRecord model
   */
  interface GradeRecordFieldRefs {
    readonly id: FieldRef<"GradeRecord", 'String'>
    readonly studentId: FieldRef<"GradeRecord", 'String'>
    readonly subject: FieldRef<"GradeRecord", 'String'>
    readonly term: FieldRef<"GradeRecord", 'Term'>
    readonly session: FieldRef<"GradeRecord", 'String'>
    readonly caScore: FieldRef<"GradeRecord", 'Float'>
    readonly examScore: FieldRef<"GradeRecord", 'Float'>
    readonly britishGrade: FieldRef<"GradeRecord", 'String'>
    readonly curriculumType: FieldRef<"GradeRecord", 'CurriculumType'>
    readonly createdAt: FieldRef<"GradeRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GradeRecord findUnique
   */
  export type GradeRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    /**
     * Filter, which GradeRecord to fetch.
     */
    where: GradeRecordWhereUniqueInput
  }

  /**
   * GradeRecord findUniqueOrThrow
   */
  export type GradeRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    /**
     * Filter, which GradeRecord to fetch.
     */
    where: GradeRecordWhereUniqueInput
  }

  /**
   * GradeRecord findFirst
   */
  export type GradeRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    /**
     * Filter, which GradeRecord to fetch.
     */
    where?: GradeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradeRecords to fetch.
     */
    orderBy?: GradeRecordOrderByWithRelationInput | GradeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradeRecords.
     */
    cursor?: GradeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradeRecords.
     */
    distinct?: GradeRecordScalarFieldEnum | GradeRecordScalarFieldEnum[]
  }

  /**
   * GradeRecord findFirstOrThrow
   */
  export type GradeRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    /**
     * Filter, which GradeRecord to fetch.
     */
    where?: GradeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradeRecords to fetch.
     */
    orderBy?: GradeRecordOrderByWithRelationInput | GradeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradeRecords.
     */
    cursor?: GradeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradeRecords.
     */
    distinct?: GradeRecordScalarFieldEnum | GradeRecordScalarFieldEnum[]
  }

  /**
   * GradeRecord findMany
   */
  export type GradeRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    /**
     * Filter, which GradeRecords to fetch.
     */
    where?: GradeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradeRecords to fetch.
     */
    orderBy?: GradeRecordOrderByWithRelationInput | GradeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GradeRecords.
     */
    cursor?: GradeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradeRecords.
     */
    distinct?: GradeRecordScalarFieldEnum | GradeRecordScalarFieldEnum[]
  }

  /**
   * GradeRecord create
   */
  export type GradeRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a GradeRecord.
     */
    data: XOR<GradeRecordCreateInput, GradeRecordUncheckedCreateInput>
  }

  /**
   * GradeRecord createMany
   */
  export type GradeRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GradeRecords.
     */
    data: GradeRecordCreateManyInput | GradeRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GradeRecord createManyAndReturn
   */
  export type GradeRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * The data used to create many GradeRecords.
     */
    data: GradeRecordCreateManyInput | GradeRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GradeRecord update
   */
  export type GradeRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a GradeRecord.
     */
    data: XOR<GradeRecordUpdateInput, GradeRecordUncheckedUpdateInput>
    /**
     * Choose, which GradeRecord to update.
     */
    where: GradeRecordWhereUniqueInput
  }

  /**
   * GradeRecord updateMany
   */
  export type GradeRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GradeRecords.
     */
    data: XOR<GradeRecordUpdateManyMutationInput, GradeRecordUncheckedUpdateManyInput>
    /**
     * Filter which GradeRecords to update
     */
    where?: GradeRecordWhereInput
    /**
     * Limit how many GradeRecords to update.
     */
    limit?: number
  }

  /**
   * GradeRecord updateManyAndReturn
   */
  export type GradeRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * The data used to update GradeRecords.
     */
    data: XOR<GradeRecordUpdateManyMutationInput, GradeRecordUncheckedUpdateManyInput>
    /**
     * Filter which GradeRecords to update
     */
    where?: GradeRecordWhereInput
    /**
     * Limit how many GradeRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GradeRecord upsert
   */
  export type GradeRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the GradeRecord to update in case it exists.
     */
    where: GradeRecordWhereUniqueInput
    /**
     * In case the GradeRecord found by the `where` argument doesn't exist, create a new GradeRecord with this data.
     */
    create: XOR<GradeRecordCreateInput, GradeRecordUncheckedCreateInput>
    /**
     * In case the GradeRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradeRecordUpdateInput, GradeRecordUncheckedUpdateInput>
  }

  /**
   * GradeRecord delete
   */
  export type GradeRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
    /**
     * Filter which GradeRecord to delete.
     */
    where: GradeRecordWhereUniqueInput
  }

  /**
   * GradeRecord deleteMany
   */
  export type GradeRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradeRecords to delete
     */
    where?: GradeRecordWhereInput
    /**
     * Limit how many GradeRecords to delete.
     */
    limit?: number
  }

  /**
   * GradeRecord without action
   */
  export type GradeRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradeRecord
     */
    select?: GradeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradeRecord
     */
    omit?: GradeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeRecordInclude<ExtArgs> | null
  }


  /**
   * Model StudentGrade
   */

  export type AggregateStudentGrade = {
    _count: StudentGradeCountAggregateOutputType | null
    _avg: StudentGradeAvgAggregateOutputType | null
    _sum: StudentGradeSumAggregateOutputType | null
    _min: StudentGradeMinAggregateOutputType | null
    _max: StudentGradeMaxAggregateOutputType | null
  }

  export type StudentGradeAvgAggregateOutputType = {
    score: number | null
  }

  export type StudentGradeSumAggregateOutputType = {
    score: number | null
  }

  export type StudentGradeMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    subject: string | null
    term: $Enums.Term | null
    session: string | null
    score: number | null
    createdAt: Date | null
  }

  export type StudentGradeMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    subject: string | null
    term: $Enums.Term | null
    session: string | null
    score: number | null
    createdAt: Date | null
  }

  export type StudentGradeCountAggregateOutputType = {
    id: number
    studentId: number
    subject: number
    term: number
    session: number
    score: number
    createdAt: number
    _all: number
  }


  export type StudentGradeAvgAggregateInputType = {
    score?: true
  }

  export type StudentGradeSumAggregateInputType = {
    score?: true
  }

  export type StudentGradeMinAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    term?: true
    session?: true
    score?: true
    createdAt?: true
  }

  export type StudentGradeMaxAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    term?: true
    session?: true
    score?: true
    createdAt?: true
  }

  export type StudentGradeCountAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    term?: true
    session?: true
    score?: true
    createdAt?: true
    _all?: true
  }

  export type StudentGradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentGrade to aggregate.
     */
    where?: StudentGradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGrades to fetch.
     */
    orderBy?: StudentGradeOrderByWithRelationInput | StudentGradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentGradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentGrades
    **/
    _count?: true | StudentGradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentGradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentGradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentGradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentGradeMaxAggregateInputType
  }

  export type GetStudentGradeAggregateType<T extends StudentGradeAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentGrade[P]>
      : GetScalarType<T[P], AggregateStudentGrade[P]>
  }




  export type StudentGradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentGradeWhereInput
    orderBy?: StudentGradeOrderByWithAggregationInput | StudentGradeOrderByWithAggregationInput[]
    by: StudentGradeScalarFieldEnum[] | StudentGradeScalarFieldEnum
    having?: StudentGradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentGradeCountAggregateInputType | true
    _avg?: StudentGradeAvgAggregateInputType
    _sum?: StudentGradeSumAggregateInputType
    _min?: StudentGradeMinAggregateInputType
    _max?: StudentGradeMaxAggregateInputType
  }

  export type StudentGradeGroupByOutputType = {
    id: string
    studentId: string
    subject: string
    term: $Enums.Term
    session: string
    score: number
    createdAt: Date
    _count: StudentGradeCountAggregateOutputType | null
    _avg: StudentGradeAvgAggregateOutputType | null
    _sum: StudentGradeSumAggregateOutputType | null
    _min: StudentGradeMinAggregateOutputType | null
    _max: StudentGradeMaxAggregateOutputType | null
  }

  type GetStudentGradeGroupByPayload<T extends StudentGradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGradeGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGradeGroupByOutputType[P]>
        }
      >
    >


  export type StudentGradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    session?: boolean
    score?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentGrade"]>

  export type StudentGradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    session?: boolean
    score?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentGrade"]>

  export type StudentGradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    session?: boolean
    score?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentGrade"]>

  export type StudentGradeSelectScalar = {
    id?: boolean
    studentId?: boolean
    subject?: boolean
    term?: boolean
    session?: boolean
    score?: boolean
    createdAt?: boolean
  }

  export type StudentGradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subject" | "term" | "session" | "score" | "createdAt", ExtArgs["result"]["studentGrade"]>
  export type StudentGradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type StudentGradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type StudentGradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $StudentGradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentGrade"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      subject: string
      term: $Enums.Term
      session: string
      score: number
      createdAt: Date
    }, ExtArgs["result"]["studentGrade"]>
    composites: {}
  }

  type StudentGradeGetPayload<S extends boolean | null | undefined | StudentGradeDefaultArgs> = $Result.GetResult<Prisma.$StudentGradePayload, S>

  type StudentGradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentGradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentGradeCountAggregateInputType | true
    }

  export interface StudentGradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentGrade'], meta: { name: 'StudentGrade' } }
    /**
     * Find zero or one StudentGrade that matches the filter.
     * @param {StudentGradeFindUniqueArgs} args - Arguments to find a StudentGrade
     * @example
     * // Get one StudentGrade
     * const studentGrade = await prisma.studentGrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentGradeFindUniqueArgs>(args: SelectSubset<T, StudentGradeFindUniqueArgs<ExtArgs>>): Prisma__StudentGradeClient<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentGrade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentGradeFindUniqueOrThrowArgs} args - Arguments to find a StudentGrade
     * @example
     * // Get one StudentGrade
     * const studentGrade = await prisma.studentGrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentGradeFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentGradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentGradeClient<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentGrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGradeFindFirstArgs} args - Arguments to find a StudentGrade
     * @example
     * // Get one StudentGrade
     * const studentGrade = await prisma.studentGrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentGradeFindFirstArgs>(args?: SelectSubset<T, StudentGradeFindFirstArgs<ExtArgs>>): Prisma__StudentGradeClient<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentGrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGradeFindFirstOrThrowArgs} args - Arguments to find a StudentGrade
     * @example
     * // Get one StudentGrade
     * const studentGrade = await prisma.studentGrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentGradeFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentGradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentGradeClient<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentGrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentGrades
     * const studentGrades = await prisma.studentGrade.findMany()
     * 
     * // Get first 10 StudentGrades
     * const studentGrades = await prisma.studentGrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentGradeWithIdOnly = await prisma.studentGrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentGradeFindManyArgs>(args?: SelectSubset<T, StudentGradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentGrade.
     * @param {StudentGradeCreateArgs} args - Arguments to create a StudentGrade.
     * @example
     * // Create one StudentGrade
     * const StudentGrade = await prisma.studentGrade.create({
     *   data: {
     *     // ... data to create a StudentGrade
     *   }
     * })
     * 
     */
    create<T extends StudentGradeCreateArgs>(args: SelectSubset<T, StudentGradeCreateArgs<ExtArgs>>): Prisma__StudentGradeClient<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentGrades.
     * @param {StudentGradeCreateManyArgs} args - Arguments to create many StudentGrades.
     * @example
     * // Create many StudentGrades
     * const studentGrade = await prisma.studentGrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentGradeCreateManyArgs>(args?: SelectSubset<T, StudentGradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentGrades and returns the data saved in the database.
     * @param {StudentGradeCreateManyAndReturnArgs} args - Arguments to create many StudentGrades.
     * @example
     * // Create many StudentGrades
     * const studentGrade = await prisma.studentGrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentGrades and only return the `id`
     * const studentGradeWithIdOnly = await prisma.studentGrade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentGradeCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentGradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentGrade.
     * @param {StudentGradeDeleteArgs} args - Arguments to delete one StudentGrade.
     * @example
     * // Delete one StudentGrade
     * const StudentGrade = await prisma.studentGrade.delete({
     *   where: {
     *     // ... filter to delete one StudentGrade
     *   }
     * })
     * 
     */
    delete<T extends StudentGradeDeleteArgs>(args: SelectSubset<T, StudentGradeDeleteArgs<ExtArgs>>): Prisma__StudentGradeClient<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentGrade.
     * @param {StudentGradeUpdateArgs} args - Arguments to update one StudentGrade.
     * @example
     * // Update one StudentGrade
     * const studentGrade = await prisma.studentGrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentGradeUpdateArgs>(args: SelectSubset<T, StudentGradeUpdateArgs<ExtArgs>>): Prisma__StudentGradeClient<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentGrades.
     * @param {StudentGradeDeleteManyArgs} args - Arguments to filter StudentGrades to delete.
     * @example
     * // Delete a few StudentGrades
     * const { count } = await prisma.studentGrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentGradeDeleteManyArgs>(args?: SelectSubset<T, StudentGradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentGrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentGrades
     * const studentGrade = await prisma.studentGrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentGradeUpdateManyArgs>(args: SelectSubset<T, StudentGradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentGrades and returns the data updated in the database.
     * @param {StudentGradeUpdateManyAndReturnArgs} args - Arguments to update many StudentGrades.
     * @example
     * // Update many StudentGrades
     * const studentGrade = await prisma.studentGrade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentGrades and only return the `id`
     * const studentGradeWithIdOnly = await prisma.studentGrade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentGradeUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentGradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentGrade.
     * @param {StudentGradeUpsertArgs} args - Arguments to update or create a StudentGrade.
     * @example
     * // Update or create a StudentGrade
     * const studentGrade = await prisma.studentGrade.upsert({
     *   create: {
     *     // ... data to create a StudentGrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentGrade we want to update
     *   }
     * })
     */
    upsert<T extends StudentGradeUpsertArgs>(args: SelectSubset<T, StudentGradeUpsertArgs<ExtArgs>>): Prisma__StudentGradeClient<$Result.GetResult<Prisma.$StudentGradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentGrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGradeCountArgs} args - Arguments to filter StudentGrades to count.
     * @example
     * // Count the number of StudentGrades
     * const count = await prisma.studentGrade.count({
     *   where: {
     *     // ... the filter for the StudentGrades we want to count
     *   }
     * })
    **/
    count<T extends StudentGradeCountArgs>(
      args?: Subset<T, StudentGradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentGradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentGrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentGradeAggregateArgs>(args: Subset<T, StudentGradeAggregateArgs>): Prisma.PrismaPromise<GetStudentGradeAggregateType<T>>

    /**
     * Group by StudentGrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGradeGroupByArgs['orderBy'] }
        : { orderBy?: StudentGradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentGrade model
   */
  readonly fields: StudentGradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentGrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentGradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentGrade model
   */
  interface StudentGradeFieldRefs {
    readonly id: FieldRef<"StudentGrade", 'String'>
    readonly studentId: FieldRef<"StudentGrade", 'String'>
    readonly subject: FieldRef<"StudentGrade", 'String'>
    readonly term: FieldRef<"StudentGrade", 'Term'>
    readonly session: FieldRef<"StudentGrade", 'String'>
    readonly score: FieldRef<"StudentGrade", 'Float'>
    readonly createdAt: FieldRef<"StudentGrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentGrade findUnique
   */
  export type StudentGradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    /**
     * Filter, which StudentGrade to fetch.
     */
    where: StudentGradeWhereUniqueInput
  }

  /**
   * StudentGrade findUniqueOrThrow
   */
  export type StudentGradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    /**
     * Filter, which StudentGrade to fetch.
     */
    where: StudentGradeWhereUniqueInput
  }

  /**
   * StudentGrade findFirst
   */
  export type StudentGradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    /**
     * Filter, which StudentGrade to fetch.
     */
    where?: StudentGradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGrades to fetch.
     */
    orderBy?: StudentGradeOrderByWithRelationInput | StudentGradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentGrades.
     */
    cursor?: StudentGradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentGrades.
     */
    distinct?: StudentGradeScalarFieldEnum | StudentGradeScalarFieldEnum[]
  }

  /**
   * StudentGrade findFirstOrThrow
   */
  export type StudentGradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    /**
     * Filter, which StudentGrade to fetch.
     */
    where?: StudentGradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGrades to fetch.
     */
    orderBy?: StudentGradeOrderByWithRelationInput | StudentGradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentGrades.
     */
    cursor?: StudentGradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentGrades.
     */
    distinct?: StudentGradeScalarFieldEnum | StudentGradeScalarFieldEnum[]
  }

  /**
   * StudentGrade findMany
   */
  export type StudentGradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    /**
     * Filter, which StudentGrades to fetch.
     */
    where?: StudentGradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentGrades to fetch.
     */
    orderBy?: StudentGradeOrderByWithRelationInput | StudentGradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentGrades.
     */
    cursor?: StudentGradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentGrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentGrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentGrades.
     */
    distinct?: StudentGradeScalarFieldEnum | StudentGradeScalarFieldEnum[]
  }

  /**
   * StudentGrade create
   */
  export type StudentGradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentGrade.
     */
    data: XOR<StudentGradeCreateInput, StudentGradeUncheckedCreateInput>
  }

  /**
   * StudentGrade createMany
   */
  export type StudentGradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentGrades.
     */
    data: StudentGradeCreateManyInput | StudentGradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentGrade createManyAndReturn
   */
  export type StudentGradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * The data used to create many StudentGrades.
     */
    data: StudentGradeCreateManyInput | StudentGradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentGrade update
   */
  export type StudentGradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentGrade.
     */
    data: XOR<StudentGradeUpdateInput, StudentGradeUncheckedUpdateInput>
    /**
     * Choose, which StudentGrade to update.
     */
    where: StudentGradeWhereUniqueInput
  }

  /**
   * StudentGrade updateMany
   */
  export type StudentGradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentGrades.
     */
    data: XOR<StudentGradeUpdateManyMutationInput, StudentGradeUncheckedUpdateManyInput>
    /**
     * Filter which StudentGrades to update
     */
    where?: StudentGradeWhereInput
    /**
     * Limit how many StudentGrades to update.
     */
    limit?: number
  }

  /**
   * StudentGrade updateManyAndReturn
   */
  export type StudentGradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * The data used to update StudentGrades.
     */
    data: XOR<StudentGradeUpdateManyMutationInput, StudentGradeUncheckedUpdateManyInput>
    /**
     * Filter which StudentGrades to update
     */
    where?: StudentGradeWhereInput
    /**
     * Limit how many StudentGrades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentGrade upsert
   */
  export type StudentGradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentGrade to update in case it exists.
     */
    where: StudentGradeWhereUniqueInput
    /**
     * In case the StudentGrade found by the `where` argument doesn't exist, create a new StudentGrade with this data.
     */
    create: XOR<StudentGradeCreateInput, StudentGradeUncheckedCreateInput>
    /**
     * In case the StudentGrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentGradeUpdateInput, StudentGradeUncheckedUpdateInput>
  }

  /**
   * StudentGrade delete
   */
  export type StudentGradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
    /**
     * Filter which StudentGrade to delete.
     */
    where: StudentGradeWhereUniqueInput
  }

  /**
   * StudentGrade deleteMany
   */
  export type StudentGradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentGrades to delete
     */
    where?: StudentGradeWhereInput
    /**
     * Limit how many StudentGrades to delete.
     */
    limit?: number
  }

  /**
   * StudentGrade without action
   */
  export type StudentGradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentGrade
     */
    select?: StudentGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentGrade
     */
    omit?: StudentGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentGradeInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    date: Date | null
    isPresent: boolean | null
    term: $Enums.Term | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    date: Date | null
    isPresent: boolean | null
    term: $Enums.Term | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    date: number
    isPresent: number
    term: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    isPresent?: true
    term?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    isPresent?: true
    term?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    isPresent?: true
    term?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    studentId: string
    date: Date
    isPresent: boolean
    term: $Enums.Term
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    isPresent?: boolean
    term?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    isPresent?: boolean
    term?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    isPresent?: boolean
    term?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    date?: boolean
    isPresent?: boolean
    term?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "date" | "isPresent" | "term", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      date: Date
      isPresent: boolean
      term: $Enums.Term
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly studentId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly isPresent: FieldRef<"Attendance", 'Boolean'>
    readonly term: FieldRef<"Attendance", 'Term'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model StudentAttendance
   */

  export type AggregateStudentAttendance = {
    _count: StudentAttendanceCountAggregateOutputType | null
    _min: StudentAttendanceMinAggregateOutputType | null
    _max: StudentAttendanceMaxAggregateOutputType | null
  }

  export type StudentAttendanceMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    date: Date | null
    status: string | null
    term: $Enums.Term | null
    session: string | null
  }

  export type StudentAttendanceMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    date: Date | null
    status: string | null
    term: $Enums.Term | null
    session: string | null
  }

  export type StudentAttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    date: number
    status: number
    term: number
    session: number
    _all: number
  }


  export type StudentAttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    status?: true
    term?: true
    session?: true
  }

  export type StudentAttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    status?: true
    term?: true
    session?: true
  }

  export type StudentAttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    status?: true
    term?: true
    session?: true
    _all?: true
  }

  export type StudentAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAttendance to aggregate.
     */
    where?: StudentAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAttendances to fetch.
     */
    orderBy?: StudentAttendanceOrderByWithRelationInput | StudentAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAttendances
    **/
    _count?: true | StudentAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAttendanceMaxAggregateInputType
  }

  export type GetStudentAttendanceAggregateType<T extends StudentAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAttendance[P]>
      : GetScalarType<T[P], AggregateStudentAttendance[P]>
  }




  export type StudentAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAttendanceWhereInput
    orderBy?: StudentAttendanceOrderByWithAggregationInput | StudentAttendanceOrderByWithAggregationInput[]
    by: StudentAttendanceScalarFieldEnum[] | StudentAttendanceScalarFieldEnum
    having?: StudentAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAttendanceCountAggregateInputType | true
    _min?: StudentAttendanceMinAggregateInputType
    _max?: StudentAttendanceMaxAggregateInputType
  }

  export type StudentAttendanceGroupByOutputType = {
    id: string
    studentId: string
    date: Date
    status: string
    term: $Enums.Term
    session: string
    _count: StudentAttendanceCountAggregateOutputType | null
    _min: StudentAttendanceMinAggregateOutputType | null
    _max: StudentAttendanceMaxAggregateOutputType | null
  }

  type GetStudentAttendanceGroupByPayload<T extends StudentAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type StudentAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    term?: boolean
    session?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAttendance"]>

  export type StudentAttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    term?: boolean
    session?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAttendance"]>

  export type StudentAttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    term?: boolean
    session?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAttendance"]>

  export type StudentAttendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    term?: boolean
    session?: boolean
  }

  export type StudentAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "date" | "status" | "term" | "session", ExtArgs["result"]["studentAttendance"]>
  export type StudentAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type StudentAttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type StudentAttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $StudentAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAttendance"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      date: Date
      status: string
      term: $Enums.Term
      session: string
    }, ExtArgs["result"]["studentAttendance"]>
    composites: {}
  }

  type StudentAttendanceGetPayload<S extends boolean | null | undefined | StudentAttendanceDefaultArgs> = $Result.GetResult<Prisma.$StudentAttendancePayload, S>

  type StudentAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAttendanceCountAggregateInputType | true
    }

  export interface StudentAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAttendance'], meta: { name: 'StudentAttendance' } }
    /**
     * Find zero or one StudentAttendance that matches the filter.
     * @param {StudentAttendanceFindUniqueArgs} args - Arguments to find a StudentAttendance
     * @example
     * // Get one StudentAttendance
     * const studentAttendance = await prisma.studentAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAttendanceFindUniqueArgs>(args: SelectSubset<T, StudentAttendanceFindUniqueArgs<ExtArgs>>): Prisma__StudentAttendanceClient<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAttendanceFindUniqueOrThrowArgs} args - Arguments to find a StudentAttendance
     * @example
     * // Get one StudentAttendance
     * const studentAttendance = await prisma.studentAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAttendanceClient<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttendanceFindFirstArgs} args - Arguments to find a StudentAttendance
     * @example
     * // Get one StudentAttendance
     * const studentAttendance = await prisma.studentAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAttendanceFindFirstArgs>(args?: SelectSubset<T, StudentAttendanceFindFirstArgs<ExtArgs>>): Prisma__StudentAttendanceClient<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttendanceFindFirstOrThrowArgs} args - Arguments to find a StudentAttendance
     * @example
     * // Get one StudentAttendance
     * const studentAttendance = await prisma.studentAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAttendanceClient<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAttendances
     * const studentAttendances = await prisma.studentAttendance.findMany()
     * 
     * // Get first 10 StudentAttendances
     * const studentAttendances = await prisma.studentAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAttendanceWithIdOnly = await prisma.studentAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAttendanceFindManyArgs>(args?: SelectSubset<T, StudentAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAttendance.
     * @param {StudentAttendanceCreateArgs} args - Arguments to create a StudentAttendance.
     * @example
     * // Create one StudentAttendance
     * const StudentAttendance = await prisma.studentAttendance.create({
     *   data: {
     *     // ... data to create a StudentAttendance
     *   }
     * })
     * 
     */
    create<T extends StudentAttendanceCreateArgs>(args: SelectSubset<T, StudentAttendanceCreateArgs<ExtArgs>>): Prisma__StudentAttendanceClient<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAttendances.
     * @param {StudentAttendanceCreateManyArgs} args - Arguments to create many StudentAttendances.
     * @example
     * // Create many StudentAttendances
     * const studentAttendance = await prisma.studentAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAttendanceCreateManyArgs>(args?: SelectSubset<T, StudentAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentAttendances and returns the data saved in the database.
     * @param {StudentAttendanceCreateManyAndReturnArgs} args - Arguments to create many StudentAttendances.
     * @example
     * // Create many StudentAttendances
     * const studentAttendance = await prisma.studentAttendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentAttendances and only return the `id`
     * const studentAttendanceWithIdOnly = await prisma.studentAttendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentAttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentAttendance.
     * @param {StudentAttendanceDeleteArgs} args - Arguments to delete one StudentAttendance.
     * @example
     * // Delete one StudentAttendance
     * const StudentAttendance = await prisma.studentAttendance.delete({
     *   where: {
     *     // ... filter to delete one StudentAttendance
     *   }
     * })
     * 
     */
    delete<T extends StudentAttendanceDeleteArgs>(args: SelectSubset<T, StudentAttendanceDeleteArgs<ExtArgs>>): Prisma__StudentAttendanceClient<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAttendance.
     * @param {StudentAttendanceUpdateArgs} args - Arguments to update one StudentAttendance.
     * @example
     * // Update one StudentAttendance
     * const studentAttendance = await prisma.studentAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAttendanceUpdateArgs>(args: SelectSubset<T, StudentAttendanceUpdateArgs<ExtArgs>>): Prisma__StudentAttendanceClient<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAttendances.
     * @param {StudentAttendanceDeleteManyArgs} args - Arguments to filter StudentAttendances to delete.
     * @example
     * // Delete a few StudentAttendances
     * const { count } = await prisma.studentAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAttendanceDeleteManyArgs>(args?: SelectSubset<T, StudentAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAttendances
     * const studentAttendance = await prisma.studentAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAttendanceUpdateManyArgs>(args: SelectSubset<T, StudentAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAttendances and returns the data updated in the database.
     * @param {StudentAttendanceUpdateManyAndReturnArgs} args - Arguments to update many StudentAttendances.
     * @example
     * // Update many StudentAttendances
     * const studentAttendance = await prisma.studentAttendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentAttendances and only return the `id`
     * const studentAttendanceWithIdOnly = await prisma.studentAttendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentAttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentAttendance.
     * @param {StudentAttendanceUpsertArgs} args - Arguments to update or create a StudentAttendance.
     * @example
     * // Update or create a StudentAttendance
     * const studentAttendance = await prisma.studentAttendance.upsert({
     *   create: {
     *     // ... data to create a StudentAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAttendance we want to update
     *   }
     * })
     */
    upsert<T extends StudentAttendanceUpsertArgs>(args: SelectSubset<T, StudentAttendanceUpsertArgs<ExtArgs>>): Prisma__StudentAttendanceClient<$Result.GetResult<Prisma.$StudentAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttendanceCountArgs} args - Arguments to filter StudentAttendances to count.
     * @example
     * // Count the number of StudentAttendances
     * const count = await prisma.studentAttendance.count({
     *   where: {
     *     // ... the filter for the StudentAttendances we want to count
     *   }
     * })
    **/
    count<T extends StudentAttendanceCountArgs>(
      args?: Subset<T, StudentAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAttendanceAggregateArgs>(args: Subset<T, StudentAttendanceAggregateArgs>): Prisma.PrismaPromise<GetStudentAttendanceAggregateType<T>>

    /**
     * Group by StudentAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: StudentAttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAttendance model
   */
  readonly fields: StudentAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentAttendance model
   */
  interface StudentAttendanceFieldRefs {
    readonly id: FieldRef<"StudentAttendance", 'String'>
    readonly studentId: FieldRef<"StudentAttendance", 'String'>
    readonly date: FieldRef<"StudentAttendance", 'DateTime'>
    readonly status: FieldRef<"StudentAttendance", 'String'>
    readonly term: FieldRef<"StudentAttendance", 'Term'>
    readonly session: FieldRef<"StudentAttendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentAttendance findUnique
   */
  export type StudentAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StudentAttendance to fetch.
     */
    where: StudentAttendanceWhereUniqueInput
  }

  /**
   * StudentAttendance findUniqueOrThrow
   */
  export type StudentAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StudentAttendance to fetch.
     */
    where: StudentAttendanceWhereUniqueInput
  }

  /**
   * StudentAttendance findFirst
   */
  export type StudentAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StudentAttendance to fetch.
     */
    where?: StudentAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAttendances to fetch.
     */
    orderBy?: StudentAttendanceOrderByWithRelationInput | StudentAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAttendances.
     */
    cursor?: StudentAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAttendances.
     */
    distinct?: StudentAttendanceScalarFieldEnum | StudentAttendanceScalarFieldEnum[]
  }

  /**
   * StudentAttendance findFirstOrThrow
   */
  export type StudentAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StudentAttendance to fetch.
     */
    where?: StudentAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAttendances to fetch.
     */
    orderBy?: StudentAttendanceOrderByWithRelationInput | StudentAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAttendances.
     */
    cursor?: StudentAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAttendances.
     */
    distinct?: StudentAttendanceScalarFieldEnum | StudentAttendanceScalarFieldEnum[]
  }

  /**
   * StudentAttendance findMany
   */
  export type StudentAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which StudentAttendances to fetch.
     */
    where?: StudentAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAttendances to fetch.
     */
    orderBy?: StudentAttendanceOrderByWithRelationInput | StudentAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAttendances.
     */
    cursor?: StudentAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAttendances.
     */
    distinct?: StudentAttendanceScalarFieldEnum | StudentAttendanceScalarFieldEnum[]
  }

  /**
   * StudentAttendance create
   */
  export type StudentAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentAttendance.
     */
    data: XOR<StudentAttendanceCreateInput, StudentAttendanceUncheckedCreateInput>
  }

  /**
   * StudentAttendance createMany
   */
  export type StudentAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAttendances.
     */
    data: StudentAttendanceCreateManyInput | StudentAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAttendance createManyAndReturn
   */
  export type StudentAttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many StudentAttendances.
     */
    data: StudentAttendanceCreateManyInput | StudentAttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAttendance update
   */
  export type StudentAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentAttendance.
     */
    data: XOR<StudentAttendanceUpdateInput, StudentAttendanceUncheckedUpdateInput>
    /**
     * Choose, which StudentAttendance to update.
     */
    where: StudentAttendanceWhereUniqueInput
  }

  /**
   * StudentAttendance updateMany
   */
  export type StudentAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAttendances.
     */
    data: XOR<StudentAttendanceUpdateManyMutationInput, StudentAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which StudentAttendances to update
     */
    where?: StudentAttendanceWhereInput
    /**
     * Limit how many StudentAttendances to update.
     */
    limit?: number
  }

  /**
   * StudentAttendance updateManyAndReturn
   */
  export type StudentAttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * The data used to update StudentAttendances.
     */
    data: XOR<StudentAttendanceUpdateManyMutationInput, StudentAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which StudentAttendances to update
     */
    where?: StudentAttendanceWhereInput
    /**
     * Limit how many StudentAttendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAttendance upsert
   */
  export type StudentAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentAttendance to update in case it exists.
     */
    where: StudentAttendanceWhereUniqueInput
    /**
     * In case the StudentAttendance found by the `where` argument doesn't exist, create a new StudentAttendance with this data.
     */
    create: XOR<StudentAttendanceCreateInput, StudentAttendanceUncheckedCreateInput>
    /**
     * In case the StudentAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAttendanceUpdateInput, StudentAttendanceUncheckedUpdateInput>
  }

  /**
   * StudentAttendance delete
   */
  export type StudentAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
    /**
     * Filter which StudentAttendance to delete.
     */
    where: StudentAttendanceWhereUniqueInput
  }

  /**
   * StudentAttendance deleteMany
   */
  export type StudentAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAttendances to delete
     */
    where?: StudentAttendanceWhereInput
    /**
     * Limit how many StudentAttendances to delete.
     */
    limit?: number
  }

  /**
   * StudentAttendance without action
   */
  export type StudentAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttendance
     */
    select?: StudentAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttendance
     */
    omit?: StudentAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAttendanceInclude<ExtArgs> | null
  }


  /**
   * Model FeeRecord
   */

  export type AggregateFeeRecord = {
    _count: FeeRecordCountAggregateOutputType | null
    _avg: FeeRecordAvgAggregateOutputType | null
    _sum: FeeRecordSumAggregateOutputType | null
    _min: FeeRecordMinAggregateOutputType | null
    _max: FeeRecordMaxAggregateOutputType | null
  }

  export type FeeRecordAvgAggregateOutputType = {
    totalAmount: number | null
    amountPaid: number | null
  }

  export type FeeRecordSumAggregateOutputType = {
    totalAmount: number | null
    amountPaid: number | null
  }

  export type FeeRecordMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    totalAmount: number | null
    amountPaid: number | null
    term: $Enums.Term | null
    session: string | null
    isCleared: boolean | null
    gatewayRef: string | null
  }

  export type FeeRecordMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    totalAmount: number | null
    amountPaid: number | null
    term: $Enums.Term | null
    session: string | null
    isCleared: boolean | null
    gatewayRef: string | null
  }

  export type FeeRecordCountAggregateOutputType = {
    id: number
    studentId: number
    totalAmount: number
    amountPaid: number
    term: number
    session: number
    isCleared: number
    gatewayRef: number
    _all: number
  }


  export type FeeRecordAvgAggregateInputType = {
    totalAmount?: true
    amountPaid?: true
  }

  export type FeeRecordSumAggregateInputType = {
    totalAmount?: true
    amountPaid?: true
  }

  export type FeeRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    totalAmount?: true
    amountPaid?: true
    term?: true
    session?: true
    isCleared?: true
    gatewayRef?: true
  }

  export type FeeRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    totalAmount?: true
    amountPaid?: true
    term?: true
    session?: true
    isCleared?: true
    gatewayRef?: true
  }

  export type FeeRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    totalAmount?: true
    amountPaid?: true
    term?: true
    session?: true
    isCleared?: true
    gatewayRef?: true
    _all?: true
  }

  export type FeeRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeRecord to aggregate.
     */
    where?: FeeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeRecords to fetch.
     */
    orderBy?: FeeRecordOrderByWithRelationInput | FeeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeeRecords
    **/
    _count?: true | FeeRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeeRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeeRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeeRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeeRecordMaxAggregateInputType
  }

  export type GetFeeRecordAggregateType<T extends FeeRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateFeeRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeeRecord[P]>
      : GetScalarType<T[P], AggregateFeeRecord[P]>
  }




  export type FeeRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeRecordWhereInput
    orderBy?: FeeRecordOrderByWithAggregationInput | FeeRecordOrderByWithAggregationInput[]
    by: FeeRecordScalarFieldEnum[] | FeeRecordScalarFieldEnum
    having?: FeeRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeeRecordCountAggregateInputType | true
    _avg?: FeeRecordAvgAggregateInputType
    _sum?: FeeRecordSumAggregateInputType
    _min?: FeeRecordMinAggregateInputType
    _max?: FeeRecordMaxAggregateInputType
  }

  export type FeeRecordGroupByOutputType = {
    id: string
    studentId: string
    totalAmount: number
    amountPaid: number
    term: $Enums.Term
    session: string
    isCleared: boolean
    gatewayRef: string | null
    _count: FeeRecordCountAggregateOutputType | null
    _avg: FeeRecordAvgAggregateOutputType | null
    _sum: FeeRecordSumAggregateOutputType | null
    _min: FeeRecordMinAggregateOutputType | null
    _max: FeeRecordMaxAggregateOutputType | null
  }

  type GetFeeRecordGroupByPayload<T extends FeeRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeeRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeeRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeeRecordGroupByOutputType[P]>
            : GetScalarType<T[P], FeeRecordGroupByOutputType[P]>
        }
      >
    >


  export type FeeRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    totalAmount?: boolean
    amountPaid?: boolean
    term?: boolean
    session?: boolean
    isCleared?: boolean
    gatewayRef?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeRecord"]>

  export type FeeRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    totalAmount?: boolean
    amountPaid?: boolean
    term?: boolean
    session?: boolean
    isCleared?: boolean
    gatewayRef?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeRecord"]>

  export type FeeRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    totalAmount?: boolean
    amountPaid?: boolean
    term?: boolean
    session?: boolean
    isCleared?: boolean
    gatewayRef?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeRecord"]>

  export type FeeRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    totalAmount?: boolean
    amountPaid?: boolean
    term?: boolean
    session?: boolean
    isCleared?: boolean
    gatewayRef?: boolean
  }

  export type FeeRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "totalAmount" | "amountPaid" | "term" | "session" | "isCleared" | "gatewayRef", ExtArgs["result"]["feeRecord"]>
  export type FeeRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type FeeRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type FeeRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $FeeRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeeRecord"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      totalAmount: number
      amountPaid: number
      term: $Enums.Term
      session: string
      isCleared: boolean
      gatewayRef: string | null
    }, ExtArgs["result"]["feeRecord"]>
    composites: {}
  }

  type FeeRecordGetPayload<S extends boolean | null | undefined | FeeRecordDefaultArgs> = $Result.GetResult<Prisma.$FeeRecordPayload, S>

  type FeeRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeeRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeeRecordCountAggregateInputType | true
    }

  export interface FeeRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeeRecord'], meta: { name: 'FeeRecord' } }
    /**
     * Find zero or one FeeRecord that matches the filter.
     * @param {FeeRecordFindUniqueArgs} args - Arguments to find a FeeRecord
     * @example
     * // Get one FeeRecord
     * const feeRecord = await prisma.feeRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeeRecordFindUniqueArgs>(args: SelectSubset<T, FeeRecordFindUniqueArgs<ExtArgs>>): Prisma__FeeRecordClient<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeeRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeeRecordFindUniqueOrThrowArgs} args - Arguments to find a FeeRecord
     * @example
     * // Get one FeeRecord
     * const feeRecord = await prisma.feeRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeeRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, FeeRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeeRecordClient<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeRecordFindFirstArgs} args - Arguments to find a FeeRecord
     * @example
     * // Get one FeeRecord
     * const feeRecord = await prisma.feeRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeeRecordFindFirstArgs>(args?: SelectSubset<T, FeeRecordFindFirstArgs<ExtArgs>>): Prisma__FeeRecordClient<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeRecordFindFirstOrThrowArgs} args - Arguments to find a FeeRecord
     * @example
     * // Get one FeeRecord
     * const feeRecord = await prisma.feeRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeeRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, FeeRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeeRecordClient<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeeRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeeRecords
     * const feeRecords = await prisma.feeRecord.findMany()
     * 
     * // Get first 10 FeeRecords
     * const feeRecords = await prisma.feeRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feeRecordWithIdOnly = await prisma.feeRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeeRecordFindManyArgs>(args?: SelectSubset<T, FeeRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeeRecord.
     * @param {FeeRecordCreateArgs} args - Arguments to create a FeeRecord.
     * @example
     * // Create one FeeRecord
     * const FeeRecord = await prisma.feeRecord.create({
     *   data: {
     *     // ... data to create a FeeRecord
     *   }
     * })
     * 
     */
    create<T extends FeeRecordCreateArgs>(args: SelectSubset<T, FeeRecordCreateArgs<ExtArgs>>): Prisma__FeeRecordClient<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeeRecords.
     * @param {FeeRecordCreateManyArgs} args - Arguments to create many FeeRecords.
     * @example
     * // Create many FeeRecords
     * const feeRecord = await prisma.feeRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeeRecordCreateManyArgs>(args?: SelectSubset<T, FeeRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeeRecords and returns the data saved in the database.
     * @param {FeeRecordCreateManyAndReturnArgs} args - Arguments to create many FeeRecords.
     * @example
     * // Create many FeeRecords
     * const feeRecord = await prisma.feeRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeeRecords and only return the `id`
     * const feeRecordWithIdOnly = await prisma.feeRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeeRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, FeeRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeeRecord.
     * @param {FeeRecordDeleteArgs} args - Arguments to delete one FeeRecord.
     * @example
     * // Delete one FeeRecord
     * const FeeRecord = await prisma.feeRecord.delete({
     *   where: {
     *     // ... filter to delete one FeeRecord
     *   }
     * })
     * 
     */
    delete<T extends FeeRecordDeleteArgs>(args: SelectSubset<T, FeeRecordDeleteArgs<ExtArgs>>): Prisma__FeeRecordClient<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeeRecord.
     * @param {FeeRecordUpdateArgs} args - Arguments to update one FeeRecord.
     * @example
     * // Update one FeeRecord
     * const feeRecord = await prisma.feeRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeeRecordUpdateArgs>(args: SelectSubset<T, FeeRecordUpdateArgs<ExtArgs>>): Prisma__FeeRecordClient<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeeRecords.
     * @param {FeeRecordDeleteManyArgs} args - Arguments to filter FeeRecords to delete.
     * @example
     * // Delete a few FeeRecords
     * const { count } = await prisma.feeRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeeRecordDeleteManyArgs>(args?: SelectSubset<T, FeeRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeeRecords
     * const feeRecord = await prisma.feeRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeeRecordUpdateManyArgs>(args: SelectSubset<T, FeeRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeRecords and returns the data updated in the database.
     * @param {FeeRecordUpdateManyAndReturnArgs} args - Arguments to update many FeeRecords.
     * @example
     * // Update many FeeRecords
     * const feeRecord = await prisma.feeRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeeRecords and only return the `id`
     * const feeRecordWithIdOnly = await prisma.feeRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeeRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, FeeRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeeRecord.
     * @param {FeeRecordUpsertArgs} args - Arguments to update or create a FeeRecord.
     * @example
     * // Update or create a FeeRecord
     * const feeRecord = await prisma.feeRecord.upsert({
     *   create: {
     *     // ... data to create a FeeRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeeRecord we want to update
     *   }
     * })
     */
    upsert<T extends FeeRecordUpsertArgs>(args: SelectSubset<T, FeeRecordUpsertArgs<ExtArgs>>): Prisma__FeeRecordClient<$Result.GetResult<Prisma.$FeeRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeRecordCountArgs} args - Arguments to filter FeeRecords to count.
     * @example
     * // Count the number of FeeRecords
     * const count = await prisma.feeRecord.count({
     *   where: {
     *     // ... the filter for the FeeRecords we want to count
     *   }
     * })
    **/
    count<T extends FeeRecordCountArgs>(
      args?: Subset<T, FeeRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeeRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeeRecordAggregateArgs>(args: Subset<T, FeeRecordAggregateArgs>): Prisma.PrismaPromise<GetFeeRecordAggregateType<T>>

    /**
     * Group by FeeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeeRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeeRecordGroupByArgs['orderBy'] }
        : { orderBy?: FeeRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeeRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeeRecord model
   */
  readonly fields: FeeRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeeRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeeRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeeRecord model
   */
  interface FeeRecordFieldRefs {
    readonly id: FieldRef<"FeeRecord", 'String'>
    readonly studentId: FieldRef<"FeeRecord", 'String'>
    readonly totalAmount: FieldRef<"FeeRecord", 'Float'>
    readonly amountPaid: FieldRef<"FeeRecord", 'Float'>
    readonly term: FieldRef<"FeeRecord", 'Term'>
    readonly session: FieldRef<"FeeRecord", 'String'>
    readonly isCleared: FieldRef<"FeeRecord", 'Boolean'>
    readonly gatewayRef: FieldRef<"FeeRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeeRecord findUnique
   */
  export type FeeRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    /**
     * Filter, which FeeRecord to fetch.
     */
    where: FeeRecordWhereUniqueInput
  }

  /**
   * FeeRecord findUniqueOrThrow
   */
  export type FeeRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    /**
     * Filter, which FeeRecord to fetch.
     */
    where: FeeRecordWhereUniqueInput
  }

  /**
   * FeeRecord findFirst
   */
  export type FeeRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    /**
     * Filter, which FeeRecord to fetch.
     */
    where?: FeeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeRecords to fetch.
     */
    orderBy?: FeeRecordOrderByWithRelationInput | FeeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeRecords.
     */
    cursor?: FeeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeRecords.
     */
    distinct?: FeeRecordScalarFieldEnum | FeeRecordScalarFieldEnum[]
  }

  /**
   * FeeRecord findFirstOrThrow
   */
  export type FeeRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    /**
     * Filter, which FeeRecord to fetch.
     */
    where?: FeeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeRecords to fetch.
     */
    orderBy?: FeeRecordOrderByWithRelationInput | FeeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeRecords.
     */
    cursor?: FeeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeRecords.
     */
    distinct?: FeeRecordScalarFieldEnum | FeeRecordScalarFieldEnum[]
  }

  /**
   * FeeRecord findMany
   */
  export type FeeRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    /**
     * Filter, which FeeRecords to fetch.
     */
    where?: FeeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeRecords to fetch.
     */
    orderBy?: FeeRecordOrderByWithRelationInput | FeeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeeRecords.
     */
    cursor?: FeeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeRecords.
     */
    distinct?: FeeRecordScalarFieldEnum | FeeRecordScalarFieldEnum[]
  }

  /**
   * FeeRecord create
   */
  export type FeeRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a FeeRecord.
     */
    data: XOR<FeeRecordCreateInput, FeeRecordUncheckedCreateInput>
  }

  /**
   * FeeRecord createMany
   */
  export type FeeRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeeRecords.
     */
    data: FeeRecordCreateManyInput | FeeRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeeRecord createManyAndReturn
   */
  export type FeeRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * The data used to create many FeeRecords.
     */
    data: FeeRecordCreateManyInput | FeeRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeeRecord update
   */
  export type FeeRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a FeeRecord.
     */
    data: XOR<FeeRecordUpdateInput, FeeRecordUncheckedUpdateInput>
    /**
     * Choose, which FeeRecord to update.
     */
    where: FeeRecordWhereUniqueInput
  }

  /**
   * FeeRecord updateMany
   */
  export type FeeRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeeRecords.
     */
    data: XOR<FeeRecordUpdateManyMutationInput, FeeRecordUncheckedUpdateManyInput>
    /**
     * Filter which FeeRecords to update
     */
    where?: FeeRecordWhereInput
    /**
     * Limit how many FeeRecords to update.
     */
    limit?: number
  }

  /**
   * FeeRecord updateManyAndReturn
   */
  export type FeeRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * The data used to update FeeRecords.
     */
    data: XOR<FeeRecordUpdateManyMutationInput, FeeRecordUncheckedUpdateManyInput>
    /**
     * Filter which FeeRecords to update
     */
    where?: FeeRecordWhereInput
    /**
     * Limit how many FeeRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeeRecord upsert
   */
  export type FeeRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the FeeRecord to update in case it exists.
     */
    where: FeeRecordWhereUniqueInput
    /**
     * In case the FeeRecord found by the `where` argument doesn't exist, create a new FeeRecord with this data.
     */
    create: XOR<FeeRecordCreateInput, FeeRecordUncheckedCreateInput>
    /**
     * In case the FeeRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeeRecordUpdateInput, FeeRecordUncheckedUpdateInput>
  }

  /**
   * FeeRecord delete
   */
  export type FeeRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
    /**
     * Filter which FeeRecord to delete.
     */
    where: FeeRecordWhereUniqueInput
  }

  /**
   * FeeRecord deleteMany
   */
  export type FeeRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeRecords to delete
     */
    where?: FeeRecordWhereInput
    /**
     * Limit how many FeeRecords to delete.
     */
    limit?: number
  }

  /**
   * FeeRecord without action
   */
  export type FeeRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeRecord
     */
    select?: FeeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeRecord
     */
    omit?: FeeRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeRecordInclude<ExtArgs> | null
  }


  /**
   * Model FeeInvoice
   */

  export type AggregateFeeInvoice = {
    _count: FeeInvoiceCountAggregateOutputType | null
    _avg: FeeInvoiceAvgAggregateOutputType | null
    _sum: FeeInvoiceSumAggregateOutputType | null
    _min: FeeInvoiceMinAggregateOutputType | null
    _max: FeeInvoiceMaxAggregateOutputType | null
  }

  export type FeeInvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type FeeInvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type FeeInvoiceMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    amount: number | null
    dueDate: Date | null
    status: string | null
    term: $Enums.Term | null
    session: string | null
    createdAt: Date | null
  }

  export type FeeInvoiceMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    amount: number | null
    dueDate: Date | null
    status: string | null
    term: $Enums.Term | null
    session: string | null
    createdAt: Date | null
  }

  export type FeeInvoiceCountAggregateOutputType = {
    id: number
    studentId: number
    amount: number
    dueDate: number
    status: number
    term: number
    session: number
    createdAt: number
    _all: number
  }


  export type FeeInvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type FeeInvoiceSumAggregateInputType = {
    amount?: true
  }

  export type FeeInvoiceMinAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    dueDate?: true
    status?: true
    term?: true
    session?: true
    createdAt?: true
  }

  export type FeeInvoiceMaxAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    dueDate?: true
    status?: true
    term?: true
    session?: true
    createdAt?: true
  }

  export type FeeInvoiceCountAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    dueDate?: true
    status?: true
    term?: true
    session?: true
    createdAt?: true
    _all?: true
  }

  export type FeeInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeInvoice to aggregate.
     */
    where?: FeeInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeInvoices to fetch.
     */
    orderBy?: FeeInvoiceOrderByWithRelationInput | FeeInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeeInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeeInvoices
    **/
    _count?: true | FeeInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeeInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeeInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeeInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeeInvoiceMaxAggregateInputType
  }

  export type GetFeeInvoiceAggregateType<T extends FeeInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateFeeInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeeInvoice[P]>
      : GetScalarType<T[P], AggregateFeeInvoice[P]>
  }




  export type FeeInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeInvoiceWhereInput
    orderBy?: FeeInvoiceOrderByWithAggregationInput | FeeInvoiceOrderByWithAggregationInput[]
    by: FeeInvoiceScalarFieldEnum[] | FeeInvoiceScalarFieldEnum
    having?: FeeInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeeInvoiceCountAggregateInputType | true
    _avg?: FeeInvoiceAvgAggregateInputType
    _sum?: FeeInvoiceSumAggregateInputType
    _min?: FeeInvoiceMinAggregateInputType
    _max?: FeeInvoiceMaxAggregateInputType
  }

  export type FeeInvoiceGroupByOutputType = {
    id: string
    studentId: string
    amount: number
    dueDate: Date
    status: string
    term: $Enums.Term
    session: string
    createdAt: Date
    _count: FeeInvoiceCountAggregateOutputType | null
    _avg: FeeInvoiceAvgAggregateOutputType | null
    _sum: FeeInvoiceSumAggregateOutputType | null
    _min: FeeInvoiceMinAggregateOutputType | null
    _max: FeeInvoiceMaxAggregateOutputType | null
  }

  type GetFeeInvoiceGroupByPayload<T extends FeeInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeeInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeeInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeeInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], FeeInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type FeeInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    term?: boolean
    session?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeInvoice"]>

  export type FeeInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    term?: boolean
    session?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeInvoice"]>

  export type FeeInvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    term?: boolean
    session?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feeInvoice"]>

  export type FeeInvoiceSelectScalar = {
    id?: boolean
    studentId?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    term?: boolean
    session?: boolean
    createdAt?: boolean
  }

  export type FeeInvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "amount" | "dueDate" | "status" | "term" | "session" | "createdAt", ExtArgs["result"]["feeInvoice"]>
  export type FeeInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type FeeInvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type FeeInvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $FeeInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeeInvoice"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      amount: number
      dueDate: Date
      status: string
      term: $Enums.Term
      session: string
      createdAt: Date
    }, ExtArgs["result"]["feeInvoice"]>
    composites: {}
  }

  type FeeInvoiceGetPayload<S extends boolean | null | undefined | FeeInvoiceDefaultArgs> = $Result.GetResult<Prisma.$FeeInvoicePayload, S>

  type FeeInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeeInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeeInvoiceCountAggregateInputType | true
    }

  export interface FeeInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeeInvoice'], meta: { name: 'FeeInvoice' } }
    /**
     * Find zero or one FeeInvoice that matches the filter.
     * @param {FeeInvoiceFindUniqueArgs} args - Arguments to find a FeeInvoice
     * @example
     * // Get one FeeInvoice
     * const feeInvoice = await prisma.feeInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeeInvoiceFindUniqueArgs>(args: SelectSubset<T, FeeInvoiceFindUniqueArgs<ExtArgs>>): Prisma__FeeInvoiceClient<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeeInvoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeeInvoiceFindUniqueOrThrowArgs} args - Arguments to find a FeeInvoice
     * @example
     * // Get one FeeInvoice
     * const feeInvoice = await prisma.feeInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeeInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, FeeInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeeInvoiceClient<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInvoiceFindFirstArgs} args - Arguments to find a FeeInvoice
     * @example
     * // Get one FeeInvoice
     * const feeInvoice = await prisma.feeInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeeInvoiceFindFirstArgs>(args?: SelectSubset<T, FeeInvoiceFindFirstArgs<ExtArgs>>): Prisma__FeeInvoiceClient<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInvoiceFindFirstOrThrowArgs} args - Arguments to find a FeeInvoice
     * @example
     * // Get one FeeInvoice
     * const feeInvoice = await prisma.feeInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeeInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, FeeInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeeInvoiceClient<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeeInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeeInvoices
     * const feeInvoices = await prisma.feeInvoice.findMany()
     * 
     * // Get first 10 FeeInvoices
     * const feeInvoices = await prisma.feeInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feeInvoiceWithIdOnly = await prisma.feeInvoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeeInvoiceFindManyArgs>(args?: SelectSubset<T, FeeInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeeInvoice.
     * @param {FeeInvoiceCreateArgs} args - Arguments to create a FeeInvoice.
     * @example
     * // Create one FeeInvoice
     * const FeeInvoice = await prisma.feeInvoice.create({
     *   data: {
     *     // ... data to create a FeeInvoice
     *   }
     * })
     * 
     */
    create<T extends FeeInvoiceCreateArgs>(args: SelectSubset<T, FeeInvoiceCreateArgs<ExtArgs>>): Prisma__FeeInvoiceClient<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeeInvoices.
     * @param {FeeInvoiceCreateManyArgs} args - Arguments to create many FeeInvoices.
     * @example
     * // Create many FeeInvoices
     * const feeInvoice = await prisma.feeInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeeInvoiceCreateManyArgs>(args?: SelectSubset<T, FeeInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeeInvoices and returns the data saved in the database.
     * @param {FeeInvoiceCreateManyAndReturnArgs} args - Arguments to create many FeeInvoices.
     * @example
     * // Create many FeeInvoices
     * const feeInvoice = await prisma.feeInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeeInvoices and only return the `id`
     * const feeInvoiceWithIdOnly = await prisma.feeInvoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeeInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, FeeInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeeInvoice.
     * @param {FeeInvoiceDeleteArgs} args - Arguments to delete one FeeInvoice.
     * @example
     * // Delete one FeeInvoice
     * const FeeInvoice = await prisma.feeInvoice.delete({
     *   where: {
     *     // ... filter to delete one FeeInvoice
     *   }
     * })
     * 
     */
    delete<T extends FeeInvoiceDeleteArgs>(args: SelectSubset<T, FeeInvoiceDeleteArgs<ExtArgs>>): Prisma__FeeInvoiceClient<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeeInvoice.
     * @param {FeeInvoiceUpdateArgs} args - Arguments to update one FeeInvoice.
     * @example
     * // Update one FeeInvoice
     * const feeInvoice = await prisma.feeInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeeInvoiceUpdateArgs>(args: SelectSubset<T, FeeInvoiceUpdateArgs<ExtArgs>>): Prisma__FeeInvoiceClient<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeeInvoices.
     * @param {FeeInvoiceDeleteManyArgs} args - Arguments to filter FeeInvoices to delete.
     * @example
     * // Delete a few FeeInvoices
     * const { count } = await prisma.feeInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeeInvoiceDeleteManyArgs>(args?: SelectSubset<T, FeeInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeeInvoices
     * const feeInvoice = await prisma.feeInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeeInvoiceUpdateManyArgs>(args: SelectSubset<T, FeeInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeInvoices and returns the data updated in the database.
     * @param {FeeInvoiceUpdateManyAndReturnArgs} args - Arguments to update many FeeInvoices.
     * @example
     * // Update many FeeInvoices
     * const feeInvoice = await prisma.feeInvoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeeInvoices and only return the `id`
     * const feeInvoiceWithIdOnly = await prisma.feeInvoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeeInvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, FeeInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeeInvoice.
     * @param {FeeInvoiceUpsertArgs} args - Arguments to update or create a FeeInvoice.
     * @example
     * // Update or create a FeeInvoice
     * const feeInvoice = await prisma.feeInvoice.upsert({
     *   create: {
     *     // ... data to create a FeeInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeeInvoice we want to update
     *   }
     * })
     */
    upsert<T extends FeeInvoiceUpsertArgs>(args: SelectSubset<T, FeeInvoiceUpsertArgs<ExtArgs>>): Prisma__FeeInvoiceClient<$Result.GetResult<Prisma.$FeeInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeeInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInvoiceCountArgs} args - Arguments to filter FeeInvoices to count.
     * @example
     * // Count the number of FeeInvoices
     * const count = await prisma.feeInvoice.count({
     *   where: {
     *     // ... the filter for the FeeInvoices we want to count
     *   }
     * })
    **/
    count<T extends FeeInvoiceCountArgs>(
      args?: Subset<T, FeeInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeeInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeeInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeeInvoiceAggregateArgs>(args: Subset<T, FeeInvoiceAggregateArgs>): Prisma.PrismaPromise<GetFeeInvoiceAggregateType<T>>

    /**
     * Group by FeeInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeInvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeeInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeeInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: FeeInvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeeInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeeInvoice model
   */
  readonly fields: FeeInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeeInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeeInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeeInvoice model
   */
  interface FeeInvoiceFieldRefs {
    readonly id: FieldRef<"FeeInvoice", 'String'>
    readonly studentId: FieldRef<"FeeInvoice", 'String'>
    readonly amount: FieldRef<"FeeInvoice", 'Float'>
    readonly dueDate: FieldRef<"FeeInvoice", 'DateTime'>
    readonly status: FieldRef<"FeeInvoice", 'String'>
    readonly term: FieldRef<"FeeInvoice", 'Term'>
    readonly session: FieldRef<"FeeInvoice", 'String'>
    readonly createdAt: FieldRef<"FeeInvoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeeInvoice findUnique
   */
  export type FeeInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which FeeInvoice to fetch.
     */
    where: FeeInvoiceWhereUniqueInput
  }

  /**
   * FeeInvoice findUniqueOrThrow
   */
  export type FeeInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which FeeInvoice to fetch.
     */
    where: FeeInvoiceWhereUniqueInput
  }

  /**
   * FeeInvoice findFirst
   */
  export type FeeInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which FeeInvoice to fetch.
     */
    where?: FeeInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeInvoices to fetch.
     */
    orderBy?: FeeInvoiceOrderByWithRelationInput | FeeInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeInvoices.
     */
    cursor?: FeeInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeInvoices.
     */
    distinct?: FeeInvoiceScalarFieldEnum | FeeInvoiceScalarFieldEnum[]
  }

  /**
   * FeeInvoice findFirstOrThrow
   */
  export type FeeInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which FeeInvoice to fetch.
     */
    where?: FeeInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeInvoices to fetch.
     */
    orderBy?: FeeInvoiceOrderByWithRelationInput | FeeInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeInvoices.
     */
    cursor?: FeeInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeInvoices.
     */
    distinct?: FeeInvoiceScalarFieldEnum | FeeInvoiceScalarFieldEnum[]
  }

  /**
   * FeeInvoice findMany
   */
  export type FeeInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which FeeInvoices to fetch.
     */
    where?: FeeInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeInvoices to fetch.
     */
    orderBy?: FeeInvoiceOrderByWithRelationInput | FeeInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeeInvoices.
     */
    cursor?: FeeInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeInvoices.
     */
    distinct?: FeeInvoiceScalarFieldEnum | FeeInvoiceScalarFieldEnum[]
  }

  /**
   * FeeInvoice create
   */
  export type FeeInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a FeeInvoice.
     */
    data: XOR<FeeInvoiceCreateInput, FeeInvoiceUncheckedCreateInput>
  }

  /**
   * FeeInvoice createMany
   */
  export type FeeInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeeInvoices.
     */
    data: FeeInvoiceCreateManyInput | FeeInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeeInvoice createManyAndReturn
   */
  export type FeeInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many FeeInvoices.
     */
    data: FeeInvoiceCreateManyInput | FeeInvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeeInvoice update
   */
  export type FeeInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a FeeInvoice.
     */
    data: XOR<FeeInvoiceUpdateInput, FeeInvoiceUncheckedUpdateInput>
    /**
     * Choose, which FeeInvoice to update.
     */
    where: FeeInvoiceWhereUniqueInput
  }

  /**
   * FeeInvoice updateMany
   */
  export type FeeInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeeInvoices.
     */
    data: XOR<FeeInvoiceUpdateManyMutationInput, FeeInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which FeeInvoices to update
     */
    where?: FeeInvoiceWhereInput
    /**
     * Limit how many FeeInvoices to update.
     */
    limit?: number
  }

  /**
   * FeeInvoice updateManyAndReturn
   */
  export type FeeInvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * The data used to update FeeInvoices.
     */
    data: XOR<FeeInvoiceUpdateManyMutationInput, FeeInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which FeeInvoices to update
     */
    where?: FeeInvoiceWhereInput
    /**
     * Limit how many FeeInvoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeeInvoice upsert
   */
  export type FeeInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the FeeInvoice to update in case it exists.
     */
    where: FeeInvoiceWhereUniqueInput
    /**
     * In case the FeeInvoice found by the `where` argument doesn't exist, create a new FeeInvoice with this data.
     */
    create: XOR<FeeInvoiceCreateInput, FeeInvoiceUncheckedCreateInput>
    /**
     * In case the FeeInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeeInvoiceUpdateInput, FeeInvoiceUncheckedUpdateInput>
  }

  /**
   * FeeInvoice delete
   */
  export type FeeInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
    /**
     * Filter which FeeInvoice to delete.
     */
    where: FeeInvoiceWhereUniqueInput
  }

  /**
   * FeeInvoice deleteMany
   */
  export type FeeInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeInvoices to delete
     */
    where?: FeeInvoiceWhereInput
    /**
     * Limit how many FeeInvoices to delete.
     */
    limit?: number
  }

  /**
   * FeeInvoice without action
   */
  export type FeeInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeInvoice
     */
    select?: FeeInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeInvoice
     */
    omit?: FeeInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeInvoiceInclude<ExtArgs> | null
  }


  /**
   * Model PaymentRecord
   */

  export type AggregatePaymentRecord = {
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  export type PaymentRecordAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentRecordSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentRecordMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    amount: number | null
    reference: string | null
    createdAt: Date | null
  }

  export type PaymentRecordMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    amount: number | null
    reference: string | null
    createdAt: Date | null
  }

  export type PaymentRecordCountAggregateOutputType = {
    id: number
    studentId: number
    amount: number
    reference: number
    createdAt: number
    _all: number
  }


  export type PaymentRecordAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentRecordSumAggregateInputType = {
    amount?: true
  }

  export type PaymentRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    reference?: true
    createdAt?: true
  }

  export type PaymentRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    reference?: true
    createdAt?: true
  }

  export type PaymentRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    amount?: true
    reference?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecord to aggregate.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRecords
    **/
    _count?: true | PaymentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type GetPaymentRecordAggregateType<T extends PaymentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRecord[P]>
      : GetScalarType<T[P], AggregatePaymentRecord[P]>
  }




  export type PaymentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithAggregationInput | PaymentRecordOrderByWithAggregationInput[]
    by: PaymentRecordScalarFieldEnum[] | PaymentRecordScalarFieldEnum
    having?: PaymentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRecordCountAggregateInputType | true
    _avg?: PaymentRecordAvgAggregateInputType
    _sum?: PaymentRecordSumAggregateInputType
    _min?: PaymentRecordMinAggregateInputType
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type PaymentRecordGroupByOutputType = {
    id: string
    studentId: string
    amount: number
    reference: string
    createdAt: Date
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  type GetPaymentRecordGroupByPayload<T extends PaymentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    reference?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    reference?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    amount?: boolean
    reference?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    amount?: boolean
    reference?: boolean
    createdAt?: boolean
  }

  export type PaymentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "amount" | "reference" | "createdAt", ExtArgs["result"]["paymentRecord"]>
  export type PaymentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type PaymentRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type PaymentRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $PaymentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRecord"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      amount: number
      reference: string
      createdAt: Date
    }, ExtArgs["result"]["paymentRecord"]>
    composites: {}
  }

  type PaymentRecordGetPayload<S extends boolean | null | undefined | PaymentRecordDefaultArgs> = $Result.GetResult<Prisma.$PaymentRecordPayload, S>

  type PaymentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentRecordCountAggregateInputType | true
    }

  export interface PaymentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRecord'], meta: { name: 'PaymentRecord' } }
    /**
     * Find zero or one PaymentRecord that matches the filter.
     * @param {PaymentRecordFindUniqueArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentRecordFindUniqueArgs>(args: SelectSubset<T, PaymentRecordFindUniqueArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentRecordFindUniqueOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentRecordFindFirstArgs>(args?: SelectSubset<T, PaymentRecordFindFirstArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany()
     * 
     * // Get first 10 PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentRecordFindManyArgs>(args?: SelectSubset<T, PaymentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentRecord.
     * @param {PaymentRecordCreateArgs} args - Arguments to create a PaymentRecord.
     * @example
     * // Create one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.create({
     *   data: {
     *     // ... data to create a PaymentRecord
     *   }
     * })
     * 
     */
    create<T extends PaymentRecordCreateArgs>(args: SelectSubset<T, PaymentRecordCreateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentRecords.
     * @param {PaymentRecordCreateManyArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentRecordCreateManyArgs>(args?: SelectSubset<T, PaymentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentRecords and returns the data saved in the database.
     * @param {PaymentRecordCreateManyAndReturnArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentRecords and only return the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentRecord.
     * @param {PaymentRecordDeleteArgs} args - Arguments to delete one PaymentRecord.
     * @example
     * // Delete one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.delete({
     *   where: {
     *     // ... filter to delete one PaymentRecord
     *   }
     * })
     * 
     */
    delete<T extends PaymentRecordDeleteArgs>(args: SelectSubset<T, PaymentRecordDeleteArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentRecord.
     * @param {PaymentRecordUpdateArgs} args - Arguments to update one PaymentRecord.
     * @example
     * // Update one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentRecordUpdateArgs>(args: SelectSubset<T, PaymentRecordUpdateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentRecords.
     * @param {PaymentRecordDeleteManyArgs} args - Arguments to filter PaymentRecords to delete.
     * @example
     * // Delete a few PaymentRecords
     * const { count } = await prisma.paymentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentRecordDeleteManyArgs>(args?: SelectSubset<T, PaymentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentRecordUpdateManyArgs>(args: SelectSubset<T, PaymentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords and returns the data updated in the database.
     * @param {PaymentRecordUpdateManyAndReturnArgs} args - Arguments to update many PaymentRecords.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentRecords and only return the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentRecord.
     * @param {PaymentRecordUpsertArgs} args - Arguments to update or create a PaymentRecord.
     * @example
     * // Update or create a PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.upsert({
     *   create: {
     *     // ... data to create a PaymentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRecord we want to update
     *   }
     * })
     */
    upsert<T extends PaymentRecordUpsertArgs>(args: SelectSubset<T, PaymentRecordUpsertArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordCountArgs} args - Arguments to filter PaymentRecords to count.
     * @example
     * // Count the number of PaymentRecords
     * const count = await prisma.paymentRecord.count({
     *   where: {
     *     // ... the filter for the PaymentRecords we want to count
     *   }
     * })
    **/
    count<T extends PaymentRecordCountArgs>(
      args?: Subset<T, PaymentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentRecordAggregateArgs>(args: Subset<T, PaymentRecordAggregateArgs>): Prisma.PrismaPromise<GetPaymentRecordAggregateType<T>>

    /**
     * Group by PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRecordGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRecord model
   */
  readonly fields: PaymentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentRecord model
   */
  interface PaymentRecordFieldRefs {
    readonly id: FieldRef<"PaymentRecord", 'String'>
    readonly studentId: FieldRef<"PaymentRecord", 'String'>
    readonly amount: FieldRef<"PaymentRecord", 'Float'>
    readonly reference: FieldRef<"PaymentRecord", 'String'>
    readonly createdAt: FieldRef<"PaymentRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentRecord findUnique
   */
  export type PaymentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findUniqueOrThrow
   */
  export type PaymentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findFirst
   */
  export type PaymentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findFirstOrThrow
   */
  export type PaymentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findMany
   */
  export type PaymentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecords to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord create
   */
  export type PaymentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRecord.
     */
    data: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
  }

  /**
   * PaymentRecord createMany
   */
  export type PaymentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentRecord createManyAndReturn
   */
  export type PaymentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRecord update
   */
  export type PaymentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRecord.
     */
    data: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
    /**
     * Choose, which PaymentRecord to update.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord updateMany
   */
  export type PaymentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to update.
     */
    limit?: number
  }

  /**
   * PaymentRecord updateManyAndReturn
   */
  export type PaymentRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRecord upsert
   */
  export type PaymentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRecord to update in case it exists.
     */
    where: PaymentRecordWhereUniqueInput
    /**
     * In case the PaymentRecord found by the `where` argument doesn't exist, create a new PaymentRecord with this data.
     */
    create: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
    /**
     * In case the PaymentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
  }

  /**
   * PaymentRecord delete
   */
  export type PaymentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter which PaymentRecord to delete.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord deleteMany
   */
  export type PaymentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecords to delete
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to delete.
     */
    limit?: number
  }

  /**
   * PaymentRecord without action
   */
  export type PaymentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClassRoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    curriculum: 'curriculum',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassRoomScalarFieldEnum = (typeof ClassRoomScalarFieldEnum)[keyof typeof ClassRoomScalarFieldEnum]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    admissionNumber: 'admissionNumber',
    curriculum: 'curriculum',
    classRoomId: 'classRoomId',
    currentClass: 'currentClass',
    guardianName: 'guardianName',
    guardianPhone: 'guardianPhone',
    dateOfBirth: 'dateOfBirth',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const StaffProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    staffId: 'staffId',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffProfileScalarFieldEnum = (typeof StaffProfileScalarFieldEnum)[keyof typeof StaffProfileScalarFieldEnum]


  export const GradeRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subject: 'subject',
    term: 'term',
    session: 'session',
    caScore: 'caScore',
    examScore: 'examScore',
    britishGrade: 'britishGrade',
    curriculumType: 'curriculumType',
    createdAt: 'createdAt'
  };

  export type GradeRecordScalarFieldEnum = (typeof GradeRecordScalarFieldEnum)[keyof typeof GradeRecordScalarFieldEnum]


  export const StudentGradeScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subject: 'subject',
    term: 'term',
    session: 'session',
    score: 'score',
    createdAt: 'createdAt'
  };

  export type StudentGradeScalarFieldEnum = (typeof StudentGradeScalarFieldEnum)[keyof typeof StudentGradeScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    date: 'date',
    isPresent: 'isPresent',
    term: 'term'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const StudentAttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    date: 'date',
    status: 'status',
    term: 'term',
    session: 'session'
  };

  export type StudentAttendanceScalarFieldEnum = (typeof StudentAttendanceScalarFieldEnum)[keyof typeof StudentAttendanceScalarFieldEnum]


  export const FeeRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    totalAmount: 'totalAmount',
    amountPaid: 'amountPaid',
    term: 'term',
    session: 'session',
    isCleared: 'isCleared',
    gatewayRef: 'gatewayRef'
  };

  export type FeeRecordScalarFieldEnum = (typeof FeeRecordScalarFieldEnum)[keyof typeof FeeRecordScalarFieldEnum]


  export const FeeInvoiceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    amount: 'amount',
    dueDate: 'dueDate',
    status: 'status',
    term: 'term',
    session: 'session',
    createdAt: 'createdAt'
  };

  export type FeeInvoiceScalarFieldEnum = (typeof FeeInvoiceScalarFieldEnum)[keyof typeof FeeInvoiceScalarFieldEnum]


  export const PaymentRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    amount: 'amount',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type PaymentRecordScalarFieldEnum = (typeof PaymentRecordScalarFieldEnum)[keyof typeof PaymentRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CurriculumType'
   */
  export type EnumCurriculumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurriculumType'>
    


  /**
   * Reference to a field of type 'CurriculumType[]'
   */
  export type ListEnumCurriculumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurriculumType[]'>
    


  /**
   * Reference to a field of type 'Term'
   */
  export type EnumTermFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Term'>
    


  /**
   * Reference to a field of type 'Term[]'
   */
  export type ListEnumTermFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Term[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    staffProfile?: XOR<StaffProfileNullableScalarRelationFilter, StaffProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: StudentProfileOrderByWithRelationInput
    staffProfile?: StaffProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    staffProfile?: XOR<StaffProfileNullableScalarRelationFilter, StaffProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClassRoomWhereInput = {
    AND?: ClassRoomWhereInput | ClassRoomWhereInput[]
    OR?: ClassRoomWhereInput[]
    NOT?: ClassRoomWhereInput | ClassRoomWhereInput[]
    id?: StringFilter<"ClassRoom"> | string
    name?: StringFilter<"ClassRoom"> | string
    level?: StringFilter<"ClassRoom"> | string
    curriculum?: EnumCurriculumTypeFilter<"ClassRoom"> | $Enums.CurriculumType
    createdAt?: DateTimeFilter<"ClassRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ClassRoom"> | Date | string
    students?: StudentProfileListRelationFilter
  }

  export type ClassRoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    curriculum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    students?: StudentProfileOrderByRelationAggregateInput
  }

  export type ClassRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ClassRoomWhereInput | ClassRoomWhereInput[]
    OR?: ClassRoomWhereInput[]
    NOT?: ClassRoomWhereInput | ClassRoomWhereInput[]
    level?: StringFilter<"ClassRoom"> | string
    curriculum?: EnumCurriculumTypeFilter<"ClassRoom"> | $Enums.CurriculumType
    createdAt?: DateTimeFilter<"ClassRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ClassRoom"> | Date | string
    students?: StudentProfileListRelationFilter
  }, "id" | "name">

  export type ClassRoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    curriculum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassRoomCountOrderByAggregateInput
    _max?: ClassRoomMaxOrderByAggregateInput
    _min?: ClassRoomMinOrderByAggregateInput
  }

  export type ClassRoomScalarWhereWithAggregatesInput = {
    AND?: ClassRoomScalarWhereWithAggregatesInput | ClassRoomScalarWhereWithAggregatesInput[]
    OR?: ClassRoomScalarWhereWithAggregatesInput[]
    NOT?: ClassRoomScalarWhereWithAggregatesInput | ClassRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassRoom"> | string
    name?: StringWithAggregatesFilter<"ClassRoom"> | string
    level?: StringWithAggregatesFilter<"ClassRoom"> | string
    curriculum?: EnumCurriculumTypeWithAggregatesFilter<"ClassRoom"> | $Enums.CurriculumType
    createdAt?: DateTimeWithAggregatesFilter<"ClassRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassRoom"> | Date | string
  }

  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    userId?: StringFilter<"StudentProfile"> | string
    admissionNumber?: StringFilter<"StudentProfile"> | string
    curriculum?: EnumCurriculumTypeFilter<"StudentProfile"> | $Enums.CurriculumType
    classRoomId?: StringNullableFilter<"StudentProfile"> | string | null
    currentClass?: StringNullableFilter<"StudentProfile"> | string | null
    guardianName?: StringFilter<"StudentProfile"> | string
    guardianPhone?: StringFilter<"StudentProfile"> | string
    dateOfBirth?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classRoom?: XOR<ClassRoomNullableScalarRelationFilter, ClassRoomWhereInput> | null
    grades?: GradeRecordListRelationFilter
    studentGrade?: StudentGradeListRelationFilter
    attendance?: AttendanceListRelationFilter
    studentAttendance?: StudentAttendanceListRelationFilter
    fees?: FeeRecordListRelationFilter
    feeInvoice?: FeeInvoiceListRelationFilter
    paymentRecord?: PaymentRecordListRelationFilter
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    admissionNumber?: SortOrder
    curriculum?: SortOrder
    classRoomId?: SortOrderInput | SortOrder
    currentClass?: SortOrderInput | SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    classRoom?: ClassRoomOrderByWithRelationInput
    grades?: GradeRecordOrderByRelationAggregateInput
    studentGrade?: StudentGradeOrderByRelationAggregateInput
    attendance?: AttendanceOrderByRelationAggregateInput
    studentAttendance?: StudentAttendanceOrderByRelationAggregateInput
    fees?: FeeRecordOrderByRelationAggregateInput
    feeInvoice?: FeeInvoiceOrderByRelationAggregateInput
    paymentRecord?: PaymentRecordOrderByRelationAggregateInput
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    admissionNumber?: string
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    curriculum?: EnumCurriculumTypeFilter<"StudentProfile"> | $Enums.CurriculumType
    classRoomId?: StringNullableFilter<"StudentProfile"> | string | null
    currentClass?: StringNullableFilter<"StudentProfile"> | string | null
    guardianName?: StringFilter<"StudentProfile"> | string
    guardianPhone?: StringFilter<"StudentProfile"> | string
    dateOfBirth?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    classRoom?: XOR<ClassRoomNullableScalarRelationFilter, ClassRoomWhereInput> | null
    grades?: GradeRecordListRelationFilter
    studentGrade?: StudentGradeListRelationFilter
    attendance?: AttendanceListRelationFilter
    studentAttendance?: StudentAttendanceListRelationFilter
    fees?: FeeRecordListRelationFilter
    feeInvoice?: FeeInvoiceListRelationFilter
    paymentRecord?: PaymentRecordListRelationFilter
  }, "id" | "userId" | "admissionNumber">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    admissionNumber?: SortOrder
    curriculum?: SortOrder
    classRoomId?: SortOrderInput | SortOrder
    currentClass?: SortOrderInput | SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentProfile"> | string
    userId?: StringWithAggregatesFilter<"StudentProfile"> | string
    admissionNumber?: StringWithAggregatesFilter<"StudentProfile"> | string
    curriculum?: EnumCurriculumTypeWithAggregatesFilter<"StudentProfile"> | $Enums.CurriculumType
    classRoomId?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    currentClass?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    guardianName?: StringWithAggregatesFilter<"StudentProfile"> | string
    guardianPhone?: StringWithAggregatesFilter<"StudentProfile"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"StudentProfile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
  }

  export type StaffProfileWhereInput = {
    AND?: StaffProfileWhereInput | StaffProfileWhereInput[]
    OR?: StaffProfileWhereInput[]
    NOT?: StaffProfileWhereInput | StaffProfileWhereInput[]
    id?: StringFilter<"StaffProfile"> | string
    userId?: StringFilter<"StaffProfile"> | string
    staffId?: StringFilter<"StaffProfile"> | string
    department?: StringFilter<"StaffProfile"> | string
    createdAt?: DateTimeFilter<"StaffProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StaffProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StaffProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StaffProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    staffId?: string
    AND?: StaffProfileWhereInput | StaffProfileWhereInput[]
    OR?: StaffProfileWhereInput[]
    NOT?: StaffProfileWhereInput | StaffProfileWhereInput[]
    department?: StringFilter<"StaffProfile"> | string
    createdAt?: DateTimeFilter<"StaffProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StaffProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "staffId">

  export type StaffProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffProfileCountOrderByAggregateInput
    _max?: StaffProfileMaxOrderByAggregateInput
    _min?: StaffProfileMinOrderByAggregateInput
  }

  export type StaffProfileScalarWhereWithAggregatesInput = {
    AND?: StaffProfileScalarWhereWithAggregatesInput | StaffProfileScalarWhereWithAggregatesInput[]
    OR?: StaffProfileScalarWhereWithAggregatesInput[]
    NOT?: StaffProfileScalarWhereWithAggregatesInput | StaffProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffProfile"> | string
    userId?: StringWithAggregatesFilter<"StaffProfile"> | string
    staffId?: StringWithAggregatesFilter<"StaffProfile"> | string
    department?: StringWithAggregatesFilter<"StaffProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StaffProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffProfile"> | Date | string
  }

  export type GradeRecordWhereInput = {
    AND?: GradeRecordWhereInput | GradeRecordWhereInput[]
    OR?: GradeRecordWhereInput[]
    NOT?: GradeRecordWhereInput | GradeRecordWhereInput[]
    id?: StringFilter<"GradeRecord"> | string
    studentId?: StringFilter<"GradeRecord"> | string
    subject?: StringFilter<"GradeRecord"> | string
    term?: EnumTermFilter<"GradeRecord"> | $Enums.Term
    session?: StringFilter<"GradeRecord"> | string
    caScore?: FloatNullableFilter<"GradeRecord"> | number | null
    examScore?: FloatNullableFilter<"GradeRecord"> | number | null
    britishGrade?: StringNullableFilter<"GradeRecord"> | string | null
    curriculumType?: EnumCurriculumTypeFilter<"GradeRecord"> | $Enums.CurriculumType
    createdAt?: DateTimeFilter<"GradeRecord"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }

  export type GradeRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    caScore?: SortOrderInput | SortOrder
    examScore?: SortOrderInput | SortOrder
    britishGrade?: SortOrderInput | SortOrder
    curriculumType?: SortOrder
    createdAt?: SortOrder
    student?: StudentProfileOrderByWithRelationInput
  }

  export type GradeRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_subject_term_session?: GradeRecordStudentIdSubjectTermSessionCompoundUniqueInput
    AND?: GradeRecordWhereInput | GradeRecordWhereInput[]
    OR?: GradeRecordWhereInput[]
    NOT?: GradeRecordWhereInput | GradeRecordWhereInput[]
    studentId?: StringFilter<"GradeRecord"> | string
    subject?: StringFilter<"GradeRecord"> | string
    term?: EnumTermFilter<"GradeRecord"> | $Enums.Term
    session?: StringFilter<"GradeRecord"> | string
    caScore?: FloatNullableFilter<"GradeRecord"> | number | null
    examScore?: FloatNullableFilter<"GradeRecord"> | number | null
    britishGrade?: StringNullableFilter<"GradeRecord"> | string | null
    curriculumType?: EnumCurriculumTypeFilter<"GradeRecord"> | $Enums.CurriculumType
    createdAt?: DateTimeFilter<"GradeRecord"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }, "id" | "studentId_subject_term_session">

  export type GradeRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    caScore?: SortOrderInput | SortOrder
    examScore?: SortOrderInput | SortOrder
    britishGrade?: SortOrderInput | SortOrder
    curriculumType?: SortOrder
    createdAt?: SortOrder
    _count?: GradeRecordCountOrderByAggregateInput
    _avg?: GradeRecordAvgOrderByAggregateInput
    _max?: GradeRecordMaxOrderByAggregateInput
    _min?: GradeRecordMinOrderByAggregateInput
    _sum?: GradeRecordSumOrderByAggregateInput
  }

  export type GradeRecordScalarWhereWithAggregatesInput = {
    AND?: GradeRecordScalarWhereWithAggregatesInput | GradeRecordScalarWhereWithAggregatesInput[]
    OR?: GradeRecordScalarWhereWithAggregatesInput[]
    NOT?: GradeRecordScalarWhereWithAggregatesInput | GradeRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GradeRecord"> | string
    studentId?: StringWithAggregatesFilter<"GradeRecord"> | string
    subject?: StringWithAggregatesFilter<"GradeRecord"> | string
    term?: EnumTermWithAggregatesFilter<"GradeRecord"> | $Enums.Term
    session?: StringWithAggregatesFilter<"GradeRecord"> | string
    caScore?: FloatNullableWithAggregatesFilter<"GradeRecord"> | number | null
    examScore?: FloatNullableWithAggregatesFilter<"GradeRecord"> | number | null
    britishGrade?: StringNullableWithAggregatesFilter<"GradeRecord"> | string | null
    curriculumType?: EnumCurriculumTypeWithAggregatesFilter<"GradeRecord"> | $Enums.CurriculumType
    createdAt?: DateTimeWithAggregatesFilter<"GradeRecord"> | Date | string
  }

  export type StudentGradeWhereInput = {
    AND?: StudentGradeWhereInput | StudentGradeWhereInput[]
    OR?: StudentGradeWhereInput[]
    NOT?: StudentGradeWhereInput | StudentGradeWhereInput[]
    id?: StringFilter<"StudentGrade"> | string
    studentId?: StringFilter<"StudentGrade"> | string
    subject?: StringFilter<"StudentGrade"> | string
    term?: EnumTermFilter<"StudentGrade"> | $Enums.Term
    session?: StringFilter<"StudentGrade"> | string
    score?: FloatFilter<"StudentGrade"> | number
    createdAt?: DateTimeFilter<"StudentGrade"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }

  export type StudentGradeOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    student?: StudentProfileOrderByWithRelationInput
  }

  export type StudentGradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentGradeWhereInput | StudentGradeWhereInput[]
    OR?: StudentGradeWhereInput[]
    NOT?: StudentGradeWhereInput | StudentGradeWhereInput[]
    studentId?: StringFilter<"StudentGrade"> | string
    subject?: StringFilter<"StudentGrade"> | string
    term?: EnumTermFilter<"StudentGrade"> | $Enums.Term
    session?: StringFilter<"StudentGrade"> | string
    score?: FloatFilter<"StudentGrade"> | number
    createdAt?: DateTimeFilter<"StudentGrade"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }, "id">

  export type StudentGradeOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    _count?: StudentGradeCountOrderByAggregateInput
    _avg?: StudentGradeAvgOrderByAggregateInput
    _max?: StudentGradeMaxOrderByAggregateInput
    _min?: StudentGradeMinOrderByAggregateInput
    _sum?: StudentGradeSumOrderByAggregateInput
  }

  export type StudentGradeScalarWhereWithAggregatesInput = {
    AND?: StudentGradeScalarWhereWithAggregatesInput | StudentGradeScalarWhereWithAggregatesInput[]
    OR?: StudentGradeScalarWhereWithAggregatesInput[]
    NOT?: StudentGradeScalarWhereWithAggregatesInput | StudentGradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentGrade"> | string
    studentId?: StringWithAggregatesFilter<"StudentGrade"> | string
    subject?: StringWithAggregatesFilter<"StudentGrade"> | string
    term?: EnumTermWithAggregatesFilter<"StudentGrade"> | $Enums.Term
    session?: StringWithAggregatesFilter<"StudentGrade"> | string
    score?: FloatWithAggregatesFilter<"StudentGrade"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudentGrade"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
    term?: EnumTermFilter<"Attendance"> | $Enums.Term
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    term?: SortOrder
    student?: StudentProfileOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    studentId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
    term?: EnumTermFilter<"Attendance"> | $Enums.Term
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    term?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    studentId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    isPresent?: BoolWithAggregatesFilter<"Attendance"> | boolean
    term?: EnumTermWithAggregatesFilter<"Attendance"> | $Enums.Term
  }

  export type StudentAttendanceWhereInput = {
    AND?: StudentAttendanceWhereInput | StudentAttendanceWhereInput[]
    OR?: StudentAttendanceWhereInput[]
    NOT?: StudentAttendanceWhereInput | StudentAttendanceWhereInput[]
    id?: StringFilter<"StudentAttendance"> | string
    studentId?: StringFilter<"StudentAttendance"> | string
    date?: DateTimeFilter<"StudentAttendance"> | Date | string
    status?: StringFilter<"StudentAttendance"> | string
    term?: EnumTermFilter<"StudentAttendance"> | $Enums.Term
    session?: StringFilter<"StudentAttendance"> | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }

  export type StudentAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
    student?: StudentProfileOrderByWithRelationInput
  }

  export type StudentAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentAttendanceWhereInput | StudentAttendanceWhereInput[]
    OR?: StudentAttendanceWhereInput[]
    NOT?: StudentAttendanceWhereInput | StudentAttendanceWhereInput[]
    studentId?: StringFilter<"StudentAttendance"> | string
    date?: DateTimeFilter<"StudentAttendance"> | Date | string
    status?: StringFilter<"StudentAttendance"> | string
    term?: EnumTermFilter<"StudentAttendance"> | $Enums.Term
    session?: StringFilter<"StudentAttendance"> | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }, "id">

  export type StudentAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
    _count?: StudentAttendanceCountOrderByAggregateInput
    _max?: StudentAttendanceMaxOrderByAggregateInput
    _min?: StudentAttendanceMinOrderByAggregateInput
  }

  export type StudentAttendanceScalarWhereWithAggregatesInput = {
    AND?: StudentAttendanceScalarWhereWithAggregatesInput | StudentAttendanceScalarWhereWithAggregatesInput[]
    OR?: StudentAttendanceScalarWhereWithAggregatesInput[]
    NOT?: StudentAttendanceScalarWhereWithAggregatesInput | StudentAttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAttendance"> | string
    studentId?: StringWithAggregatesFilter<"StudentAttendance"> | string
    date?: DateTimeWithAggregatesFilter<"StudentAttendance"> | Date | string
    status?: StringWithAggregatesFilter<"StudentAttendance"> | string
    term?: EnumTermWithAggregatesFilter<"StudentAttendance"> | $Enums.Term
    session?: StringWithAggregatesFilter<"StudentAttendance"> | string
  }

  export type FeeRecordWhereInput = {
    AND?: FeeRecordWhereInput | FeeRecordWhereInput[]
    OR?: FeeRecordWhereInput[]
    NOT?: FeeRecordWhereInput | FeeRecordWhereInput[]
    id?: StringFilter<"FeeRecord"> | string
    studentId?: StringFilter<"FeeRecord"> | string
    totalAmount?: FloatFilter<"FeeRecord"> | number
    amountPaid?: FloatFilter<"FeeRecord"> | number
    term?: EnumTermFilter<"FeeRecord"> | $Enums.Term
    session?: StringFilter<"FeeRecord"> | string
    isCleared?: BoolFilter<"FeeRecord"> | boolean
    gatewayRef?: StringNullableFilter<"FeeRecord"> | string | null
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }

  export type FeeRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalAmount?: SortOrder
    amountPaid?: SortOrder
    term?: SortOrder
    session?: SortOrder
    isCleared?: SortOrder
    gatewayRef?: SortOrderInput | SortOrder
    student?: StudentProfileOrderByWithRelationInput
  }

  export type FeeRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeeRecordWhereInput | FeeRecordWhereInput[]
    OR?: FeeRecordWhereInput[]
    NOT?: FeeRecordWhereInput | FeeRecordWhereInput[]
    studentId?: StringFilter<"FeeRecord"> | string
    totalAmount?: FloatFilter<"FeeRecord"> | number
    amountPaid?: FloatFilter<"FeeRecord"> | number
    term?: EnumTermFilter<"FeeRecord"> | $Enums.Term
    session?: StringFilter<"FeeRecord"> | string
    isCleared?: BoolFilter<"FeeRecord"> | boolean
    gatewayRef?: StringNullableFilter<"FeeRecord"> | string | null
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }, "id">

  export type FeeRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalAmount?: SortOrder
    amountPaid?: SortOrder
    term?: SortOrder
    session?: SortOrder
    isCleared?: SortOrder
    gatewayRef?: SortOrderInput | SortOrder
    _count?: FeeRecordCountOrderByAggregateInput
    _avg?: FeeRecordAvgOrderByAggregateInput
    _max?: FeeRecordMaxOrderByAggregateInput
    _min?: FeeRecordMinOrderByAggregateInput
    _sum?: FeeRecordSumOrderByAggregateInput
  }

  export type FeeRecordScalarWhereWithAggregatesInput = {
    AND?: FeeRecordScalarWhereWithAggregatesInput | FeeRecordScalarWhereWithAggregatesInput[]
    OR?: FeeRecordScalarWhereWithAggregatesInput[]
    NOT?: FeeRecordScalarWhereWithAggregatesInput | FeeRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeeRecord"> | string
    studentId?: StringWithAggregatesFilter<"FeeRecord"> | string
    totalAmount?: FloatWithAggregatesFilter<"FeeRecord"> | number
    amountPaid?: FloatWithAggregatesFilter<"FeeRecord"> | number
    term?: EnumTermWithAggregatesFilter<"FeeRecord"> | $Enums.Term
    session?: StringWithAggregatesFilter<"FeeRecord"> | string
    isCleared?: BoolWithAggregatesFilter<"FeeRecord"> | boolean
    gatewayRef?: StringNullableWithAggregatesFilter<"FeeRecord"> | string | null
  }

  export type FeeInvoiceWhereInput = {
    AND?: FeeInvoiceWhereInput | FeeInvoiceWhereInput[]
    OR?: FeeInvoiceWhereInput[]
    NOT?: FeeInvoiceWhereInput | FeeInvoiceWhereInput[]
    id?: StringFilter<"FeeInvoice"> | string
    studentId?: StringFilter<"FeeInvoice"> | string
    amount?: FloatFilter<"FeeInvoice"> | number
    dueDate?: DateTimeFilter<"FeeInvoice"> | Date | string
    status?: StringFilter<"FeeInvoice"> | string
    term?: EnumTermFilter<"FeeInvoice"> | $Enums.Term
    session?: StringFilter<"FeeInvoice"> | string
    createdAt?: DateTimeFilter<"FeeInvoice"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }

  export type FeeInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
    student?: StudentProfileOrderByWithRelationInput
  }

  export type FeeInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeeInvoiceWhereInput | FeeInvoiceWhereInput[]
    OR?: FeeInvoiceWhereInput[]
    NOT?: FeeInvoiceWhereInput | FeeInvoiceWhereInput[]
    studentId?: StringFilter<"FeeInvoice"> | string
    amount?: FloatFilter<"FeeInvoice"> | number
    dueDate?: DateTimeFilter<"FeeInvoice"> | Date | string
    status?: StringFilter<"FeeInvoice"> | string
    term?: EnumTermFilter<"FeeInvoice"> | $Enums.Term
    session?: StringFilter<"FeeInvoice"> | string
    createdAt?: DateTimeFilter<"FeeInvoice"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }, "id">

  export type FeeInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
    _count?: FeeInvoiceCountOrderByAggregateInput
    _avg?: FeeInvoiceAvgOrderByAggregateInput
    _max?: FeeInvoiceMaxOrderByAggregateInput
    _min?: FeeInvoiceMinOrderByAggregateInput
    _sum?: FeeInvoiceSumOrderByAggregateInput
  }

  export type FeeInvoiceScalarWhereWithAggregatesInput = {
    AND?: FeeInvoiceScalarWhereWithAggregatesInput | FeeInvoiceScalarWhereWithAggregatesInput[]
    OR?: FeeInvoiceScalarWhereWithAggregatesInput[]
    NOT?: FeeInvoiceScalarWhereWithAggregatesInput | FeeInvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeeInvoice"> | string
    studentId?: StringWithAggregatesFilter<"FeeInvoice"> | string
    amount?: FloatWithAggregatesFilter<"FeeInvoice"> | number
    dueDate?: DateTimeWithAggregatesFilter<"FeeInvoice"> | Date | string
    status?: StringWithAggregatesFilter<"FeeInvoice"> | string
    term?: EnumTermWithAggregatesFilter<"FeeInvoice"> | $Enums.Term
    session?: StringWithAggregatesFilter<"FeeInvoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FeeInvoice"> | Date | string
  }

  export type PaymentRecordWhereInput = {
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    id?: StringFilter<"PaymentRecord"> | string
    studentId?: StringFilter<"PaymentRecord"> | string
    amount?: FloatFilter<"PaymentRecord"> | number
    reference?: StringFilter<"PaymentRecord"> | string
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }

  export type PaymentRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    student?: StudentProfileOrderByWithRelationInput
  }

  export type PaymentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    studentId?: StringFilter<"PaymentRecord"> | string
    amount?: FloatFilter<"PaymentRecord"> | number
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }, "id" | "reference">

  export type PaymentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentRecordCountOrderByAggregateInput
    _avg?: PaymentRecordAvgOrderByAggregateInput
    _max?: PaymentRecordMaxOrderByAggregateInput
    _min?: PaymentRecordMinOrderByAggregateInput
    _sum?: PaymentRecordSumOrderByAggregateInput
  }

  export type PaymentRecordScalarWhereWithAggregatesInput = {
    AND?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    OR?: PaymentRecordScalarWhereWithAggregatesInput[]
    NOT?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentRecord"> | string
    studentId?: StringWithAggregatesFilter<"PaymentRecord"> | string
    amount?: FloatWithAggregatesFilter<"PaymentRecord"> | number
    reference?: StringWithAggregatesFilter<"PaymentRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentRecord"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: StudentProfileCreateNestedOneWithoutUserInput
    staffProfile?: StaffProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    staffProfile?: StaffProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StudentProfileUpdateOneWithoutUserNestedInput
    staffProfile?: StaffProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    staffProfile?: StaffProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassRoomCreateInput = {
    id?: string
    name: string
    level: string
    curriculum?: $Enums.CurriculumType
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentProfileCreateNestedManyWithoutClassRoomInput
  }

  export type ClassRoomUncheckedCreateInput = {
    id?: string
    name: string
    level: string
    curriculum?: $Enums.CurriculumType
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentProfileUncheckedCreateNestedManyWithoutClassRoomInput
  }

  export type ClassRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUpdateManyWithoutClassRoomNestedInput
  }

  export type ClassRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentProfileUncheckedUpdateManyWithoutClassRoomNestedInput
  }

  export type ClassRoomCreateManyInput = {
    id?: string
    name: string
    level: string
    curriculum?: $Enums.CurriculumType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    classRoom?: ClassRoomCreateNestedOneWithoutStudentsInput
    grades?: GradeRecordCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeRecordCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeRecordUncheckedCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeRecordUncheckedCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    classRoom?: ClassRoomUpdateOneWithoutStudentsNestedInput
    grades?: GradeRecordUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeRecordUncheckedUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUncheckedUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateManyInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffProfileCreateInput = {
    id?: string
    staffId: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStaffProfileInput
  }

  export type StaffProfileUncheckedCreateInput = {
    id?: string
    userId: string
    staffId: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffProfileNestedInput
  }

  export type StaffProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffProfileCreateManyInput = {
    id?: string
    userId: string
    staffId: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeRecordCreateInput = {
    id?: string
    subject: string
    term: $Enums.Term
    session: string
    caScore?: number | null
    examScore?: number | null
    britishGrade?: string | null
    curriculumType: $Enums.CurriculumType
    createdAt?: Date | string
    student: StudentProfileCreateNestedOneWithoutGradesInput
  }

  export type GradeRecordUncheckedCreateInput = {
    id?: string
    studentId: string
    subject: string
    term: $Enums.Term
    session: string
    caScore?: number | null
    examScore?: number | null
    britishGrade?: string | null
    curriculumType: $Enums.CurriculumType
    createdAt?: Date | string
  }

  export type GradeRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    caScore?: NullableFloatFieldUpdateOperationsInput | number | null
    examScore?: NullableFloatFieldUpdateOperationsInput | number | null
    britishGrade?: NullableStringFieldUpdateOperationsInput | string | null
    curriculumType?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentProfileUpdateOneRequiredWithoutGradesNestedInput
  }

  export type GradeRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    caScore?: NullableFloatFieldUpdateOperationsInput | number | null
    examScore?: NullableFloatFieldUpdateOperationsInput | number | null
    britishGrade?: NullableStringFieldUpdateOperationsInput | string | null
    curriculumType?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeRecordCreateManyInput = {
    id?: string
    studentId: string
    subject: string
    term: $Enums.Term
    session: string
    caScore?: number | null
    examScore?: number | null
    britishGrade?: string | null
    curriculumType: $Enums.CurriculumType
    createdAt?: Date | string
  }

  export type GradeRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    caScore?: NullableFloatFieldUpdateOperationsInput | number | null
    examScore?: NullableFloatFieldUpdateOperationsInput | number | null
    britishGrade?: NullableStringFieldUpdateOperationsInput | string | null
    curriculumType?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    caScore?: NullableFloatFieldUpdateOperationsInput | number | null
    examScore?: NullableFloatFieldUpdateOperationsInput | number | null
    britishGrade?: NullableStringFieldUpdateOperationsInput | string | null
    curriculumType?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGradeCreateInput = {
    id?: string
    subject: string
    term: $Enums.Term
    session: string
    score: number
    createdAt?: Date | string
    student: StudentProfileCreateNestedOneWithoutStudentGradeInput
  }

  export type StudentGradeUncheckedCreateInput = {
    id?: string
    studentId: string
    subject: string
    term: $Enums.Term
    session: string
    score: number
    createdAt?: Date | string
  }

  export type StudentGradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentProfileUpdateOneRequiredWithoutStudentGradeNestedInput
  }

  export type StudentGradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGradeCreateManyInput = {
    id?: string
    studentId: string
    subject: string
    term: $Enums.Term
    session: string
    score: number
    createdAt?: Date | string
  }

  export type StudentGradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date?: Date | string
    isPresent?: boolean
    term: $Enums.Term
    student: StudentProfileCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    studentId: string
    date?: Date | string
    isPresent?: boolean
    term: $Enums.Term
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    student?: StudentProfileUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
  }

  export type AttendanceCreateManyInput = {
    id?: string
    studentId: string
    date?: Date | string
    isPresent?: boolean
    term: $Enums.Term
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
  }

  export type StudentAttendanceCreateInput = {
    id?: string
    date?: Date | string
    status: string
    term: $Enums.Term
    session: string
    student: StudentProfileCreateNestedOneWithoutStudentAttendanceInput
  }

  export type StudentAttendanceUncheckedCreateInput = {
    id?: string
    studentId: string
    date?: Date | string
    status: string
    term: $Enums.Term
    session: string
  }

  export type StudentAttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    student?: StudentProfileUpdateOneRequiredWithoutStudentAttendanceNestedInput
  }

  export type StudentAttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
  }

  export type StudentAttendanceCreateManyInput = {
    id?: string
    studentId: string
    date?: Date | string
    status: string
    term: $Enums.Term
    session: string
  }

  export type StudentAttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
  }

  export type StudentAttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
  }

  export type FeeRecordCreateInput = {
    id?: string
    totalAmount: number
    amountPaid?: number
    term: $Enums.Term
    session: string
    isCleared?: boolean
    gatewayRef?: string | null
    student: StudentProfileCreateNestedOneWithoutFeesInput
  }

  export type FeeRecordUncheckedCreateInput = {
    id?: string
    studentId: string
    totalAmount: number
    amountPaid?: number
    term: $Enums.Term
    session: string
    isCleared?: boolean
    gatewayRef?: string | null
  }

  export type FeeRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    isCleared?: BoolFieldUpdateOperationsInput | boolean
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentProfileUpdateOneRequiredWithoutFeesNestedInput
  }

  export type FeeRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    isCleared?: BoolFieldUpdateOperationsInput | boolean
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeeRecordCreateManyInput = {
    id?: string
    studentId: string
    totalAmount: number
    amountPaid?: number
    term: $Enums.Term
    session: string
    isCleared?: boolean
    gatewayRef?: string | null
  }

  export type FeeRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    isCleared?: BoolFieldUpdateOperationsInput | boolean
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeeRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    isCleared?: BoolFieldUpdateOperationsInput | boolean
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeeInvoiceCreateInput = {
    id?: string
    amount: number
    dueDate: Date | string
    status?: string
    term: $Enums.Term
    session: string
    createdAt?: Date | string
    student: StudentProfileCreateNestedOneWithoutFeeInvoiceInput
  }

  export type FeeInvoiceUncheckedCreateInput = {
    id?: string
    studentId: string
    amount: number
    dueDate: Date | string
    status?: string
    term: $Enums.Term
    session: string
    createdAt?: Date | string
  }

  export type FeeInvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentProfileUpdateOneRequiredWithoutFeeInvoiceNestedInput
  }

  export type FeeInvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeInvoiceCreateManyInput = {
    id?: string
    studentId: string
    amount: number
    dueDate: Date | string
    status?: string
    term: $Enums.Term
    session: string
    createdAt?: Date | string
  }

  export type FeeInvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeInvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordCreateInput = {
    id?: string
    amount: number
    reference: string
    createdAt?: Date | string
    student: StudentProfileCreateNestedOneWithoutPaymentRecordInput
  }

  export type PaymentRecordUncheckedCreateInput = {
    id?: string
    studentId: string
    amount: number
    reference: string
    createdAt?: Date | string
  }

  export type PaymentRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentProfileUpdateOneRequiredWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordCreateManyInput = {
    id?: string
    studentId: string
    amount: number
    reference: string
    createdAt?: Date | string
  }

  export type PaymentRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentProfileNullableScalarRelationFilter = {
    is?: StudentProfileWhereInput | null
    isNot?: StudentProfileWhereInput | null
  }

  export type StaffProfileNullableScalarRelationFilter = {
    is?: StaffProfileWhereInput | null
    isNot?: StaffProfileWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCurriculumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurriculumType | EnumCurriculumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurriculumTypeFilter<$PrismaModel> | $Enums.CurriculumType
  }

  export type StudentProfileListRelationFilter = {
    every?: StudentProfileWhereInput
    some?: StudentProfileWhereInput
    none?: StudentProfileWhereInput
  }

  export type StudentProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassRoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    curriculum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    curriculum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassRoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    curriculum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCurriculumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurriculumType | EnumCurriculumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurriculumTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurriculumType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurriculumTypeFilter<$PrismaModel>
    _max?: NestedEnumCurriculumTypeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClassRoomNullableScalarRelationFilter = {
    is?: ClassRoomWhereInput | null
    isNot?: ClassRoomWhereInput | null
  }

  export type GradeRecordListRelationFilter = {
    every?: GradeRecordWhereInput
    some?: GradeRecordWhereInput
    none?: GradeRecordWhereInput
  }

  export type StudentGradeListRelationFilter = {
    every?: StudentGradeWhereInput
    some?: StudentGradeWhereInput
    none?: StudentGradeWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type StudentAttendanceListRelationFilter = {
    every?: StudentAttendanceWhereInput
    some?: StudentAttendanceWhereInput
    none?: StudentAttendanceWhereInput
  }

  export type FeeRecordListRelationFilter = {
    every?: FeeRecordWhereInput
    some?: FeeRecordWhereInput
    none?: FeeRecordWhereInput
  }

  export type FeeInvoiceListRelationFilter = {
    every?: FeeInvoiceWhereInput
    some?: FeeInvoiceWhereInput
    none?: FeeInvoiceWhereInput
  }

  export type PaymentRecordListRelationFilter = {
    every?: PaymentRecordWhereInput
    some?: PaymentRecordWhereInput
    none?: PaymentRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GradeRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentGradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeeRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeeInvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    admissionNumber?: SortOrder
    curriculum?: SortOrder
    classRoomId?: SortOrder
    currentClass?: SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    dateOfBirth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    admissionNumber?: SortOrder
    curriculum?: SortOrder
    classRoomId?: SortOrder
    currentClass?: SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    dateOfBirth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    admissionNumber?: SortOrder
    curriculum?: SortOrder
    classRoomId?: SortOrder
    currentClass?: SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    dateOfBirth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StaffProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    staffId?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTermFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermFilter<$PrismaModel> | $Enums.Term
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StudentProfileScalarRelationFilter = {
    is?: StudentProfileWhereInput
    isNot?: StudentProfileWhereInput
  }

  export type GradeRecordStudentIdSubjectTermSessionCompoundUniqueInput = {
    studentId: string
    subject: string
    term: $Enums.Term
    session: string
  }

  export type GradeRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    britishGrade?: SortOrder
    curriculumType?: SortOrder
    createdAt?: SortOrder
  }

  export type GradeRecordAvgOrderByAggregateInput = {
    caScore?: SortOrder
    examScore?: SortOrder
  }

  export type GradeRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    britishGrade?: SortOrder
    curriculumType?: SortOrder
    createdAt?: SortOrder
  }

  export type GradeRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    caScore?: SortOrder
    examScore?: SortOrder
    britishGrade?: SortOrder
    curriculumType?: SortOrder
    createdAt?: SortOrder
  }

  export type GradeRecordSumOrderByAggregateInput = {
    caScore?: SortOrder
    examScore?: SortOrder
  }

  export type EnumTermWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermWithAggregatesFilter<$PrismaModel> | $Enums.Term
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermFilter<$PrismaModel>
    _max?: NestedEnumTermFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StudentGradeCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentGradeAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type StudentGradeMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentGradeMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    term?: SortOrder
    session?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentGradeSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    term?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    term?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    term?: SortOrder
  }

  export type StudentAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
  }

  export type StudentAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
  }

  export type StudentAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
  }

  export type FeeRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalAmount?: SortOrder
    amountPaid?: SortOrder
    term?: SortOrder
    session?: SortOrder
    isCleared?: SortOrder
    gatewayRef?: SortOrder
  }

  export type FeeRecordAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    amountPaid?: SortOrder
  }

  export type FeeRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalAmount?: SortOrder
    amountPaid?: SortOrder
    term?: SortOrder
    session?: SortOrder
    isCleared?: SortOrder
    gatewayRef?: SortOrder
  }

  export type FeeRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalAmount?: SortOrder
    amountPaid?: SortOrder
    term?: SortOrder
    session?: SortOrder
    isCleared?: SortOrder
    gatewayRef?: SortOrder
  }

  export type FeeRecordSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    amountPaid?: SortOrder
  }

  export type FeeInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
  }

  export type FeeInvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FeeInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
  }

  export type FeeInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    term?: SortOrder
    session?: SortOrder
    createdAt?: SortOrder
  }

  export type FeeInvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentRecordAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentRecordSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StudentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StaffProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffProfileCreateWithoutUserInput, StaffProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffProfileCreateOrConnectWithoutUserInput
    connect?: StaffProfileWhereUniqueInput
  }

  export type StudentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StaffProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffProfileCreateWithoutUserInput, StaffProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffProfileCreateOrConnectWithoutUserInput
    connect?: StaffProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StaffProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffProfileCreateWithoutUserInput, StaffProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffProfileCreateOrConnectWithoutUserInput
    upsert?: StaffProfileUpsertWithoutUserInput
    disconnect?: StaffProfileWhereInput | boolean
    delete?: StaffProfileWhereInput | boolean
    connect?: StaffProfileWhereUniqueInput
    update?: XOR<XOR<StaffProfileUpdateToOneWithWhereWithoutUserInput, StaffProfileUpdateWithoutUserInput>, StaffProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StaffProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffProfileCreateWithoutUserInput, StaffProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffProfileCreateOrConnectWithoutUserInput
    upsert?: StaffProfileUpsertWithoutUserInput
    disconnect?: StaffProfileWhereInput | boolean
    delete?: StaffProfileWhereInput | boolean
    connect?: StaffProfileWhereUniqueInput
    update?: XOR<XOR<StaffProfileUpdateToOneWithWhereWithoutUserInput, StaffProfileUpdateWithoutUserInput>, StaffProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileCreateNestedManyWithoutClassRoomInput = {
    create?: XOR<StudentProfileCreateWithoutClassRoomInput, StudentProfileUncheckedCreateWithoutClassRoomInput> | StudentProfileCreateWithoutClassRoomInput[] | StudentProfileUncheckedCreateWithoutClassRoomInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutClassRoomInput | StudentProfileCreateOrConnectWithoutClassRoomInput[]
    createMany?: StudentProfileCreateManyClassRoomInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type StudentProfileUncheckedCreateNestedManyWithoutClassRoomInput = {
    create?: XOR<StudentProfileCreateWithoutClassRoomInput, StudentProfileUncheckedCreateWithoutClassRoomInput> | StudentProfileCreateWithoutClassRoomInput[] | StudentProfileUncheckedCreateWithoutClassRoomInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutClassRoomInput | StudentProfileCreateOrConnectWithoutClassRoomInput[]
    createMany?: StudentProfileCreateManyClassRoomInputEnvelope
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
  }

  export type EnumCurriculumTypeFieldUpdateOperationsInput = {
    set?: $Enums.CurriculumType
  }

  export type StudentProfileUpdateManyWithoutClassRoomNestedInput = {
    create?: XOR<StudentProfileCreateWithoutClassRoomInput, StudentProfileUncheckedCreateWithoutClassRoomInput> | StudentProfileCreateWithoutClassRoomInput[] | StudentProfileUncheckedCreateWithoutClassRoomInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutClassRoomInput | StudentProfileCreateOrConnectWithoutClassRoomInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutClassRoomInput | StudentProfileUpsertWithWhereUniqueWithoutClassRoomInput[]
    createMany?: StudentProfileCreateManyClassRoomInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutClassRoomInput | StudentProfileUpdateWithWhereUniqueWithoutClassRoomInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutClassRoomInput | StudentProfileUpdateManyWithWhereWithoutClassRoomInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type StudentProfileUncheckedUpdateManyWithoutClassRoomNestedInput = {
    create?: XOR<StudentProfileCreateWithoutClassRoomInput, StudentProfileUncheckedCreateWithoutClassRoomInput> | StudentProfileCreateWithoutClassRoomInput[] | StudentProfileUncheckedCreateWithoutClassRoomInput[]
    connectOrCreate?: StudentProfileCreateOrConnectWithoutClassRoomInput | StudentProfileCreateOrConnectWithoutClassRoomInput[]
    upsert?: StudentProfileUpsertWithWhereUniqueWithoutClassRoomInput | StudentProfileUpsertWithWhereUniqueWithoutClassRoomInput[]
    createMany?: StudentProfileCreateManyClassRoomInputEnvelope
    set?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    disconnect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    delete?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    connect?: StudentProfileWhereUniqueInput | StudentProfileWhereUniqueInput[]
    update?: StudentProfileUpdateWithWhereUniqueWithoutClassRoomInput | StudentProfileUpdateWithWhereUniqueWithoutClassRoomInput[]
    updateMany?: StudentProfileUpdateManyWithWhereWithoutClassRoomInput | StudentProfileUpdateManyWithWhereWithoutClassRoomInput[]
    deleteMany?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ClassRoomCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassRoomCreateWithoutStudentsInput, ClassRoomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassRoomCreateOrConnectWithoutStudentsInput
    connect?: ClassRoomWhereUniqueInput
  }

  export type GradeRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<GradeRecordCreateWithoutStudentInput, GradeRecordUncheckedCreateWithoutStudentInput> | GradeRecordCreateWithoutStudentInput[] | GradeRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeRecordCreateOrConnectWithoutStudentInput | GradeRecordCreateOrConnectWithoutStudentInput[]
    createMany?: GradeRecordCreateManyStudentInputEnvelope
    connect?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
  }

  export type StudentGradeCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentGradeCreateWithoutStudentInput, StudentGradeUncheckedCreateWithoutStudentInput> | StudentGradeCreateWithoutStudentInput[] | StudentGradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGradeCreateOrConnectWithoutStudentInput | StudentGradeCreateOrConnectWithoutStudentInput[]
    createMany?: StudentGradeCreateManyStudentInputEnvelope
    connect?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type StudentAttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAttendanceCreateWithoutStudentInput, StudentAttendanceUncheckedCreateWithoutStudentInput> | StudentAttendanceCreateWithoutStudentInput[] | StudentAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAttendanceCreateOrConnectWithoutStudentInput | StudentAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAttendanceCreateManyStudentInputEnvelope
    connect?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
  }

  export type FeeRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeeRecordCreateWithoutStudentInput, FeeRecordUncheckedCreateWithoutStudentInput> | FeeRecordCreateWithoutStudentInput[] | FeeRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeRecordCreateOrConnectWithoutStudentInput | FeeRecordCreateOrConnectWithoutStudentInput[]
    createMany?: FeeRecordCreateManyStudentInputEnvelope
    connect?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
  }

  export type FeeInvoiceCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeeInvoiceCreateWithoutStudentInput, FeeInvoiceUncheckedCreateWithoutStudentInput> | FeeInvoiceCreateWithoutStudentInput[] | FeeInvoiceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeInvoiceCreateOrConnectWithoutStudentInput | FeeInvoiceCreateOrConnectWithoutStudentInput[]
    createMany?: FeeInvoiceCreateManyStudentInputEnvelope
    connect?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
  }

  export type PaymentRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<PaymentRecordCreateWithoutStudentInput, PaymentRecordUncheckedCreateWithoutStudentInput> | PaymentRecordCreateWithoutStudentInput[] | PaymentRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutStudentInput | PaymentRecordCreateOrConnectWithoutStudentInput[]
    createMany?: PaymentRecordCreateManyStudentInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type GradeRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<GradeRecordCreateWithoutStudentInput, GradeRecordUncheckedCreateWithoutStudentInput> | GradeRecordCreateWithoutStudentInput[] | GradeRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeRecordCreateOrConnectWithoutStudentInput | GradeRecordCreateOrConnectWithoutStudentInput[]
    createMany?: GradeRecordCreateManyStudentInputEnvelope
    connect?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
  }

  export type StudentGradeUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentGradeCreateWithoutStudentInput, StudentGradeUncheckedCreateWithoutStudentInput> | StudentGradeCreateWithoutStudentInput[] | StudentGradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGradeCreateOrConnectWithoutStudentInput | StudentGradeCreateOrConnectWithoutStudentInput[]
    createMany?: StudentGradeCreateManyStudentInputEnvelope
    connect?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAttendanceCreateWithoutStudentInput, StudentAttendanceUncheckedCreateWithoutStudentInput> | StudentAttendanceCreateWithoutStudentInput[] | StudentAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAttendanceCreateOrConnectWithoutStudentInput | StudentAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAttendanceCreateManyStudentInputEnvelope
    connect?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
  }

  export type FeeRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeeRecordCreateWithoutStudentInput, FeeRecordUncheckedCreateWithoutStudentInput> | FeeRecordCreateWithoutStudentInput[] | FeeRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeRecordCreateOrConnectWithoutStudentInput | FeeRecordCreateOrConnectWithoutStudentInput[]
    createMany?: FeeRecordCreateManyStudentInputEnvelope
    connect?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
  }

  export type FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeeInvoiceCreateWithoutStudentInput, FeeInvoiceUncheckedCreateWithoutStudentInput> | FeeInvoiceCreateWithoutStudentInput[] | FeeInvoiceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeInvoiceCreateOrConnectWithoutStudentInput | FeeInvoiceCreateOrConnectWithoutStudentInput[]
    createMany?: FeeInvoiceCreateManyStudentInputEnvelope
    connect?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
  }

  export type PaymentRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PaymentRecordCreateWithoutStudentInput, PaymentRecordUncheckedCreateWithoutStudentInput> | PaymentRecordCreateWithoutStudentInput[] | PaymentRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutStudentInput | PaymentRecordCreateOrConnectWithoutStudentInput[]
    createMany?: PaymentRecordCreateManyStudentInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type ClassRoomUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<ClassRoomCreateWithoutStudentsInput, ClassRoomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassRoomCreateOrConnectWithoutStudentsInput
    upsert?: ClassRoomUpsertWithoutStudentsInput
    disconnect?: ClassRoomWhereInput | boolean
    delete?: ClassRoomWhereInput | boolean
    connect?: ClassRoomWhereUniqueInput
    update?: XOR<XOR<ClassRoomUpdateToOneWithWhereWithoutStudentsInput, ClassRoomUpdateWithoutStudentsInput>, ClassRoomUncheckedUpdateWithoutStudentsInput>
  }

  export type GradeRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GradeRecordCreateWithoutStudentInput, GradeRecordUncheckedCreateWithoutStudentInput> | GradeRecordCreateWithoutStudentInput[] | GradeRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeRecordCreateOrConnectWithoutStudentInput | GradeRecordCreateOrConnectWithoutStudentInput[]
    upsert?: GradeRecordUpsertWithWhereUniqueWithoutStudentInput | GradeRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GradeRecordCreateManyStudentInputEnvelope
    set?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
    disconnect?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
    delete?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
    connect?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
    update?: GradeRecordUpdateWithWhereUniqueWithoutStudentInput | GradeRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GradeRecordUpdateManyWithWhereWithoutStudentInput | GradeRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GradeRecordScalarWhereInput | GradeRecordScalarWhereInput[]
  }

  export type StudentGradeUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentGradeCreateWithoutStudentInput, StudentGradeUncheckedCreateWithoutStudentInput> | StudentGradeCreateWithoutStudentInput[] | StudentGradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGradeCreateOrConnectWithoutStudentInput | StudentGradeCreateOrConnectWithoutStudentInput[]
    upsert?: StudentGradeUpsertWithWhereUniqueWithoutStudentInput | StudentGradeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentGradeCreateManyStudentInputEnvelope
    set?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
    disconnect?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
    delete?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
    connect?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
    update?: StudentGradeUpdateWithWhereUniqueWithoutStudentInput | StudentGradeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentGradeUpdateManyWithWhereWithoutStudentInput | StudentGradeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentGradeScalarWhereInput | StudentGradeScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type StudentAttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAttendanceCreateWithoutStudentInput, StudentAttendanceUncheckedCreateWithoutStudentInput> | StudentAttendanceCreateWithoutStudentInput[] | StudentAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAttendanceCreateOrConnectWithoutStudentInput | StudentAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput | StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAttendanceCreateManyStudentInputEnvelope
    set?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
    disconnect?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
    delete?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
    connect?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
    update?: StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput | StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAttendanceUpdateManyWithWhereWithoutStudentInput | StudentAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAttendanceScalarWhereInput | StudentAttendanceScalarWhereInput[]
  }

  export type FeeRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeeRecordCreateWithoutStudentInput, FeeRecordUncheckedCreateWithoutStudentInput> | FeeRecordCreateWithoutStudentInput[] | FeeRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeRecordCreateOrConnectWithoutStudentInput | FeeRecordCreateOrConnectWithoutStudentInput[]
    upsert?: FeeRecordUpsertWithWhereUniqueWithoutStudentInput | FeeRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeeRecordCreateManyStudentInputEnvelope
    set?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
    disconnect?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
    delete?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
    connect?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
    update?: FeeRecordUpdateWithWhereUniqueWithoutStudentInput | FeeRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeeRecordUpdateManyWithWhereWithoutStudentInput | FeeRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeeRecordScalarWhereInput | FeeRecordScalarWhereInput[]
  }

  export type FeeInvoiceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeeInvoiceCreateWithoutStudentInput, FeeInvoiceUncheckedCreateWithoutStudentInput> | FeeInvoiceCreateWithoutStudentInput[] | FeeInvoiceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeInvoiceCreateOrConnectWithoutStudentInput | FeeInvoiceCreateOrConnectWithoutStudentInput[]
    upsert?: FeeInvoiceUpsertWithWhereUniqueWithoutStudentInput | FeeInvoiceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeeInvoiceCreateManyStudentInputEnvelope
    set?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
    disconnect?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
    delete?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
    connect?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
    update?: FeeInvoiceUpdateWithWhereUniqueWithoutStudentInput | FeeInvoiceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeeInvoiceUpdateManyWithWhereWithoutStudentInput | FeeInvoiceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeeInvoiceScalarWhereInput | FeeInvoiceScalarWhereInput[]
  }

  export type PaymentRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutStudentInput, PaymentRecordUncheckedCreateWithoutStudentInput> | PaymentRecordCreateWithoutStudentInput[] | PaymentRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutStudentInput | PaymentRecordCreateOrConnectWithoutStudentInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutStudentInput | PaymentRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PaymentRecordCreateManyStudentInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutStudentInput | PaymentRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutStudentInput | PaymentRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type GradeRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GradeRecordCreateWithoutStudentInput, GradeRecordUncheckedCreateWithoutStudentInput> | GradeRecordCreateWithoutStudentInput[] | GradeRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeRecordCreateOrConnectWithoutStudentInput | GradeRecordCreateOrConnectWithoutStudentInput[]
    upsert?: GradeRecordUpsertWithWhereUniqueWithoutStudentInput | GradeRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GradeRecordCreateManyStudentInputEnvelope
    set?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
    disconnect?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
    delete?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
    connect?: GradeRecordWhereUniqueInput | GradeRecordWhereUniqueInput[]
    update?: GradeRecordUpdateWithWhereUniqueWithoutStudentInput | GradeRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GradeRecordUpdateManyWithWhereWithoutStudentInput | GradeRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GradeRecordScalarWhereInput | GradeRecordScalarWhereInput[]
  }

  export type StudentGradeUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentGradeCreateWithoutStudentInput, StudentGradeUncheckedCreateWithoutStudentInput> | StudentGradeCreateWithoutStudentInput[] | StudentGradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentGradeCreateOrConnectWithoutStudentInput | StudentGradeCreateOrConnectWithoutStudentInput[]
    upsert?: StudentGradeUpsertWithWhereUniqueWithoutStudentInput | StudentGradeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentGradeCreateManyStudentInputEnvelope
    set?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
    disconnect?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
    delete?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
    connect?: StudentGradeWhereUniqueInput | StudentGradeWhereUniqueInput[]
    update?: StudentGradeUpdateWithWhereUniqueWithoutStudentInput | StudentGradeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentGradeUpdateManyWithWhereWithoutStudentInput | StudentGradeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentGradeScalarWhereInput | StudentGradeScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAttendanceCreateWithoutStudentInput, StudentAttendanceUncheckedCreateWithoutStudentInput> | StudentAttendanceCreateWithoutStudentInput[] | StudentAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAttendanceCreateOrConnectWithoutStudentInput | StudentAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput | StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAttendanceCreateManyStudentInputEnvelope
    set?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
    disconnect?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
    delete?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
    connect?: StudentAttendanceWhereUniqueInput | StudentAttendanceWhereUniqueInput[]
    update?: StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput | StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAttendanceUpdateManyWithWhereWithoutStudentInput | StudentAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAttendanceScalarWhereInput | StudentAttendanceScalarWhereInput[]
  }

  export type FeeRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeeRecordCreateWithoutStudentInput, FeeRecordUncheckedCreateWithoutStudentInput> | FeeRecordCreateWithoutStudentInput[] | FeeRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeRecordCreateOrConnectWithoutStudentInput | FeeRecordCreateOrConnectWithoutStudentInput[]
    upsert?: FeeRecordUpsertWithWhereUniqueWithoutStudentInput | FeeRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeeRecordCreateManyStudentInputEnvelope
    set?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
    disconnect?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
    delete?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
    connect?: FeeRecordWhereUniqueInput | FeeRecordWhereUniqueInput[]
    update?: FeeRecordUpdateWithWhereUniqueWithoutStudentInput | FeeRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeeRecordUpdateManyWithWhereWithoutStudentInput | FeeRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeeRecordScalarWhereInput | FeeRecordScalarWhereInput[]
  }

  export type FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeeInvoiceCreateWithoutStudentInput, FeeInvoiceUncheckedCreateWithoutStudentInput> | FeeInvoiceCreateWithoutStudentInput[] | FeeInvoiceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeInvoiceCreateOrConnectWithoutStudentInput | FeeInvoiceCreateOrConnectWithoutStudentInput[]
    upsert?: FeeInvoiceUpsertWithWhereUniqueWithoutStudentInput | FeeInvoiceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeeInvoiceCreateManyStudentInputEnvelope
    set?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
    disconnect?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
    delete?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
    connect?: FeeInvoiceWhereUniqueInput | FeeInvoiceWhereUniqueInput[]
    update?: FeeInvoiceUpdateWithWhereUniqueWithoutStudentInput | FeeInvoiceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeeInvoiceUpdateManyWithWhereWithoutStudentInput | FeeInvoiceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeeInvoiceScalarWhereInput | FeeInvoiceScalarWhereInput[]
  }

  export type PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutStudentInput, PaymentRecordUncheckedCreateWithoutStudentInput> | PaymentRecordCreateWithoutStudentInput[] | PaymentRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutStudentInput | PaymentRecordCreateOrConnectWithoutStudentInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutStudentInput | PaymentRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PaymentRecordCreateManyStudentInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutStudentInput | PaymentRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutStudentInput | PaymentRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStaffProfileInput = {
    create?: XOR<UserCreateWithoutStaffProfileInput, UserUncheckedCreateWithoutStaffProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStaffProfileNestedInput = {
    create?: XOR<UserCreateWithoutStaffProfileInput, UserUncheckedCreateWithoutStaffProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffProfileInput
    upsert?: UserUpsertWithoutStaffProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffProfileInput, UserUpdateWithoutStaffProfileInput>, UserUncheckedUpdateWithoutStaffProfileInput>
  }

  export type StudentProfileCreateNestedOneWithoutGradesInput = {
    create?: XOR<StudentProfileCreateWithoutGradesInput, StudentProfileUncheckedCreateWithoutGradesInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutGradesInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type EnumTermFieldUpdateOperationsInput = {
    set?: $Enums.Term
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentProfileUpdateOneRequiredWithoutGradesNestedInput = {
    create?: XOR<StudentProfileCreateWithoutGradesInput, StudentProfileUncheckedCreateWithoutGradesInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutGradesInput
    upsert?: StudentProfileUpsertWithoutGradesInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutGradesInput, StudentProfileUpdateWithoutGradesInput>, StudentProfileUncheckedUpdateWithoutGradesInput>
  }

  export type StudentProfileCreateNestedOneWithoutStudentGradeInput = {
    create?: XOR<StudentProfileCreateWithoutStudentGradeInput, StudentProfileUncheckedCreateWithoutStudentGradeInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentGradeInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentProfileUpdateOneRequiredWithoutStudentGradeNestedInput = {
    create?: XOR<StudentProfileCreateWithoutStudentGradeInput, StudentProfileUncheckedCreateWithoutStudentGradeInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentGradeInput
    upsert?: StudentProfileUpsertWithoutStudentGradeInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutStudentGradeInput, StudentProfileUpdateWithoutStudentGradeInput>, StudentProfileUncheckedUpdateWithoutStudentGradeInput>
  }

  export type StudentProfileCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<StudentProfileCreateWithoutAttendanceInput, StudentProfileUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutAttendanceInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StudentProfileUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<StudentProfileCreateWithoutAttendanceInput, StudentProfileUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutAttendanceInput
    upsert?: StudentProfileUpsertWithoutAttendanceInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutAttendanceInput, StudentProfileUpdateWithoutAttendanceInput>, StudentProfileUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentProfileCreateNestedOneWithoutStudentAttendanceInput = {
    create?: XOR<StudentProfileCreateWithoutStudentAttendanceInput, StudentProfileUncheckedCreateWithoutStudentAttendanceInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentAttendanceInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StudentProfileUpdateOneRequiredWithoutStudentAttendanceNestedInput = {
    create?: XOR<StudentProfileCreateWithoutStudentAttendanceInput, StudentProfileUncheckedCreateWithoutStudentAttendanceInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutStudentAttendanceInput
    upsert?: StudentProfileUpsertWithoutStudentAttendanceInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutStudentAttendanceInput, StudentProfileUpdateWithoutStudentAttendanceInput>, StudentProfileUncheckedUpdateWithoutStudentAttendanceInput>
  }

  export type StudentProfileCreateNestedOneWithoutFeesInput = {
    create?: XOR<StudentProfileCreateWithoutFeesInput, StudentProfileUncheckedCreateWithoutFeesInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutFeesInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StudentProfileUpdateOneRequiredWithoutFeesNestedInput = {
    create?: XOR<StudentProfileCreateWithoutFeesInput, StudentProfileUncheckedCreateWithoutFeesInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutFeesInput
    upsert?: StudentProfileUpsertWithoutFeesInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutFeesInput, StudentProfileUpdateWithoutFeesInput>, StudentProfileUncheckedUpdateWithoutFeesInput>
  }

  export type StudentProfileCreateNestedOneWithoutFeeInvoiceInput = {
    create?: XOR<StudentProfileCreateWithoutFeeInvoiceInput, StudentProfileUncheckedCreateWithoutFeeInvoiceInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutFeeInvoiceInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StudentProfileUpdateOneRequiredWithoutFeeInvoiceNestedInput = {
    create?: XOR<StudentProfileCreateWithoutFeeInvoiceInput, StudentProfileUncheckedCreateWithoutFeeInvoiceInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutFeeInvoiceInput
    upsert?: StudentProfileUpsertWithoutFeeInvoiceInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutFeeInvoiceInput, StudentProfileUpdateWithoutFeeInvoiceInput>, StudentProfileUncheckedUpdateWithoutFeeInvoiceInput>
  }

  export type StudentProfileCreateNestedOneWithoutPaymentRecordInput = {
    create?: XOR<StudentProfileCreateWithoutPaymentRecordInput, StudentProfileUncheckedCreateWithoutPaymentRecordInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutPaymentRecordInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StudentProfileUpdateOneRequiredWithoutPaymentRecordNestedInput = {
    create?: XOR<StudentProfileCreateWithoutPaymentRecordInput, StudentProfileUncheckedCreateWithoutPaymentRecordInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutPaymentRecordInput
    upsert?: StudentProfileUpsertWithoutPaymentRecordInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutPaymentRecordInput, StudentProfileUpdateWithoutPaymentRecordInput>, StudentProfileUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCurriculumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurriculumType | EnumCurriculumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurriculumTypeFilter<$PrismaModel> | $Enums.CurriculumType
  }

  export type NestedEnumCurriculumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurriculumType | EnumCurriculumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurriculumTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurriculumType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurriculumTypeFilter<$PrismaModel>
    _max?: NestedEnumCurriculumTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTermFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermFilter<$PrismaModel> | $Enums.Term
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTermWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Term | EnumTermFieldRefInput<$PrismaModel>
    in?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    notIn?: $Enums.Term[] | ListEnumTermFieldRefInput<$PrismaModel>
    not?: NestedEnumTermWithAggregatesFilter<$PrismaModel> | $Enums.Term
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermFilter<$PrismaModel>
    _max?: NestedEnumTermFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StudentProfileCreateWithoutUserInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classRoom?: ClassRoomCreateNestedOneWithoutStudentsInput
    grades?: GradeRecordCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeRecordCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutUserInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeRecordUncheckedCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeRecordUncheckedCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutUserInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
  }

  export type StaffProfileCreateWithoutUserInput = {
    id?: string
    staffId: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffProfileUncheckedCreateWithoutUserInput = {
    id?: string
    staffId: string
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffProfileCreateOrConnectWithoutUserInput = {
    where: StaffProfileWhereUniqueInput
    create: XOR<StaffProfileCreateWithoutUserInput, StaffProfileUncheckedCreateWithoutUserInput>
  }

  export type StudentProfileUpsertWithoutUserInput = {
    update: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classRoom?: ClassRoomUpdateOneWithoutStudentsNestedInput
    grades?: GradeRecordUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeRecordUncheckedUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUncheckedUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StaffProfileUpsertWithoutUserInput = {
    update: XOR<StaffProfileUpdateWithoutUserInput, StaffProfileUncheckedUpdateWithoutUserInput>
    create: XOR<StaffProfileCreateWithoutUserInput, StaffProfileUncheckedCreateWithoutUserInput>
    where?: StaffProfileWhereInput
  }

  export type StaffProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: StaffProfileWhereInput
    data: XOR<StaffProfileUpdateWithoutUserInput, StaffProfileUncheckedUpdateWithoutUserInput>
  }

  export type StaffProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateWithoutClassRoomInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    grades?: GradeRecordCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeRecordCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutClassRoomInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeRecordUncheckedCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeRecordUncheckedCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutClassRoomInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutClassRoomInput, StudentProfileUncheckedCreateWithoutClassRoomInput>
  }

  export type StudentProfileCreateManyClassRoomInputEnvelope = {
    data: StudentProfileCreateManyClassRoomInput | StudentProfileCreateManyClassRoomInput[]
    skipDuplicates?: boolean
  }

  export type StudentProfileUpsertWithWhereUniqueWithoutClassRoomInput = {
    where: StudentProfileWhereUniqueInput
    update: XOR<StudentProfileUpdateWithoutClassRoomInput, StudentProfileUncheckedUpdateWithoutClassRoomInput>
    create: XOR<StudentProfileCreateWithoutClassRoomInput, StudentProfileUncheckedCreateWithoutClassRoomInput>
  }

  export type StudentProfileUpdateWithWhereUniqueWithoutClassRoomInput = {
    where: StudentProfileWhereUniqueInput
    data: XOR<StudentProfileUpdateWithoutClassRoomInput, StudentProfileUncheckedUpdateWithoutClassRoomInput>
  }

  export type StudentProfileUpdateManyWithWhereWithoutClassRoomInput = {
    where: StudentProfileScalarWhereInput
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyWithoutClassRoomInput>
  }

  export type StudentProfileScalarWhereInput = {
    AND?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    OR?: StudentProfileScalarWhereInput[]
    NOT?: StudentProfileScalarWhereInput | StudentProfileScalarWhereInput[]
    id?: StringFilter<"StudentProfile"> | string
    userId?: StringFilter<"StudentProfile"> | string
    admissionNumber?: StringFilter<"StudentProfile"> | string
    curriculum?: EnumCurriculumTypeFilter<"StudentProfile"> | $Enums.CurriculumType
    classRoomId?: StringNullableFilter<"StudentProfile"> | string | null
    currentClass?: StringNullableFilter<"StudentProfile"> | string | null
    guardianName?: StringFilter<"StudentProfile"> | string
    guardianPhone?: StringFilter<"StudentProfile"> | string
    dateOfBirth?: DateTimeNullableFilter<"StudentProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    staffProfile?: StaffProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    staffProfile?: StaffProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type ClassRoomCreateWithoutStudentsInput = {
    id?: string
    name: string
    level: string
    curriculum?: $Enums.CurriculumType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassRoomUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    level: string
    curriculum?: $Enums.CurriculumType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassRoomCreateOrConnectWithoutStudentsInput = {
    where: ClassRoomWhereUniqueInput
    create: XOR<ClassRoomCreateWithoutStudentsInput, ClassRoomUncheckedCreateWithoutStudentsInput>
  }

  export type GradeRecordCreateWithoutStudentInput = {
    id?: string
    subject: string
    term: $Enums.Term
    session: string
    caScore?: number | null
    examScore?: number | null
    britishGrade?: string | null
    curriculumType: $Enums.CurriculumType
    createdAt?: Date | string
  }

  export type GradeRecordUncheckedCreateWithoutStudentInput = {
    id?: string
    subject: string
    term: $Enums.Term
    session: string
    caScore?: number | null
    examScore?: number | null
    britishGrade?: string | null
    curriculumType: $Enums.CurriculumType
    createdAt?: Date | string
  }

  export type GradeRecordCreateOrConnectWithoutStudentInput = {
    where: GradeRecordWhereUniqueInput
    create: XOR<GradeRecordCreateWithoutStudentInput, GradeRecordUncheckedCreateWithoutStudentInput>
  }

  export type GradeRecordCreateManyStudentInputEnvelope = {
    data: GradeRecordCreateManyStudentInput | GradeRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentGradeCreateWithoutStudentInput = {
    id?: string
    subject: string
    term: $Enums.Term
    session: string
    score: number
    createdAt?: Date | string
  }

  export type StudentGradeUncheckedCreateWithoutStudentInput = {
    id?: string
    subject: string
    term: $Enums.Term
    session: string
    score: number
    createdAt?: Date | string
  }

  export type StudentGradeCreateOrConnectWithoutStudentInput = {
    where: StudentGradeWhereUniqueInput
    create: XOR<StudentGradeCreateWithoutStudentInput, StudentGradeUncheckedCreateWithoutStudentInput>
  }

  export type StudentGradeCreateManyStudentInputEnvelope = {
    data: StudentGradeCreateManyStudentInput | StudentGradeCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    isPresent?: boolean
    term: $Enums.Term
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    isPresent?: boolean
    term: $Enums.Term
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentAttendanceCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    status: string
    term: $Enums.Term
    session: string
  }

  export type StudentAttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    status: string
    term: $Enums.Term
    session: string
  }

  export type StudentAttendanceCreateOrConnectWithoutStudentInput = {
    where: StudentAttendanceWhereUniqueInput
    create: XOR<StudentAttendanceCreateWithoutStudentInput, StudentAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type StudentAttendanceCreateManyStudentInputEnvelope = {
    data: StudentAttendanceCreateManyStudentInput | StudentAttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type FeeRecordCreateWithoutStudentInput = {
    id?: string
    totalAmount: number
    amountPaid?: number
    term: $Enums.Term
    session: string
    isCleared?: boolean
    gatewayRef?: string | null
  }

  export type FeeRecordUncheckedCreateWithoutStudentInput = {
    id?: string
    totalAmount: number
    amountPaid?: number
    term: $Enums.Term
    session: string
    isCleared?: boolean
    gatewayRef?: string | null
  }

  export type FeeRecordCreateOrConnectWithoutStudentInput = {
    where: FeeRecordWhereUniqueInput
    create: XOR<FeeRecordCreateWithoutStudentInput, FeeRecordUncheckedCreateWithoutStudentInput>
  }

  export type FeeRecordCreateManyStudentInputEnvelope = {
    data: FeeRecordCreateManyStudentInput | FeeRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type FeeInvoiceCreateWithoutStudentInput = {
    id?: string
    amount: number
    dueDate: Date | string
    status?: string
    term: $Enums.Term
    session: string
    createdAt?: Date | string
  }

  export type FeeInvoiceUncheckedCreateWithoutStudentInput = {
    id?: string
    amount: number
    dueDate: Date | string
    status?: string
    term: $Enums.Term
    session: string
    createdAt?: Date | string
  }

  export type FeeInvoiceCreateOrConnectWithoutStudentInput = {
    where: FeeInvoiceWhereUniqueInput
    create: XOR<FeeInvoiceCreateWithoutStudentInput, FeeInvoiceUncheckedCreateWithoutStudentInput>
  }

  export type FeeInvoiceCreateManyStudentInputEnvelope = {
    data: FeeInvoiceCreateManyStudentInput | FeeInvoiceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentRecordCreateWithoutStudentInput = {
    id?: string
    amount: number
    reference: string
    createdAt?: Date | string
  }

  export type PaymentRecordUncheckedCreateWithoutStudentInput = {
    id?: string
    amount: number
    reference: string
    createdAt?: Date | string
  }

  export type PaymentRecordCreateOrConnectWithoutStudentInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutStudentInput, PaymentRecordUncheckedCreateWithoutStudentInput>
  }

  export type PaymentRecordCreateManyStudentInputEnvelope = {
    data: PaymentRecordCreateManyStudentInput | PaymentRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffProfile?: StaffProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffProfile?: StaffProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ClassRoomUpsertWithoutStudentsInput = {
    update: XOR<ClassRoomUpdateWithoutStudentsInput, ClassRoomUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassRoomCreateWithoutStudentsInput, ClassRoomUncheckedCreateWithoutStudentsInput>
    where?: ClassRoomWhereInput
  }

  export type ClassRoomUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassRoomWhereInput
    data: XOR<ClassRoomUpdateWithoutStudentsInput, ClassRoomUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassRoomUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassRoomUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: GradeRecordWhereUniqueInput
    update: XOR<GradeRecordUpdateWithoutStudentInput, GradeRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<GradeRecordCreateWithoutStudentInput, GradeRecordUncheckedCreateWithoutStudentInput>
  }

  export type GradeRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: GradeRecordWhereUniqueInput
    data: XOR<GradeRecordUpdateWithoutStudentInput, GradeRecordUncheckedUpdateWithoutStudentInput>
  }

  export type GradeRecordUpdateManyWithWhereWithoutStudentInput = {
    where: GradeRecordScalarWhereInput
    data: XOR<GradeRecordUpdateManyMutationInput, GradeRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type GradeRecordScalarWhereInput = {
    AND?: GradeRecordScalarWhereInput | GradeRecordScalarWhereInput[]
    OR?: GradeRecordScalarWhereInput[]
    NOT?: GradeRecordScalarWhereInput | GradeRecordScalarWhereInput[]
    id?: StringFilter<"GradeRecord"> | string
    studentId?: StringFilter<"GradeRecord"> | string
    subject?: StringFilter<"GradeRecord"> | string
    term?: EnumTermFilter<"GradeRecord"> | $Enums.Term
    session?: StringFilter<"GradeRecord"> | string
    caScore?: FloatNullableFilter<"GradeRecord"> | number | null
    examScore?: FloatNullableFilter<"GradeRecord"> | number | null
    britishGrade?: StringNullableFilter<"GradeRecord"> | string | null
    curriculumType?: EnumCurriculumTypeFilter<"GradeRecord"> | $Enums.CurriculumType
    createdAt?: DateTimeFilter<"GradeRecord"> | Date | string
  }

  export type StudentGradeUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentGradeWhereUniqueInput
    update: XOR<StudentGradeUpdateWithoutStudentInput, StudentGradeUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentGradeCreateWithoutStudentInput, StudentGradeUncheckedCreateWithoutStudentInput>
  }

  export type StudentGradeUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentGradeWhereUniqueInput
    data: XOR<StudentGradeUpdateWithoutStudentInput, StudentGradeUncheckedUpdateWithoutStudentInput>
  }

  export type StudentGradeUpdateManyWithWhereWithoutStudentInput = {
    where: StudentGradeScalarWhereInput
    data: XOR<StudentGradeUpdateManyMutationInput, StudentGradeUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentGradeScalarWhereInput = {
    AND?: StudentGradeScalarWhereInput | StudentGradeScalarWhereInput[]
    OR?: StudentGradeScalarWhereInput[]
    NOT?: StudentGradeScalarWhereInput | StudentGradeScalarWhereInput[]
    id?: StringFilter<"StudentGrade"> | string
    studentId?: StringFilter<"StudentGrade"> | string
    subject?: StringFilter<"StudentGrade"> | string
    term?: EnumTermFilter<"StudentGrade"> | $Enums.Term
    session?: StringFilter<"StudentGrade"> | string
    score?: FloatFilter<"StudentGrade"> | number
    createdAt?: DateTimeFilter<"StudentGrade"> | Date | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
    term?: EnumTermFilter<"Attendance"> | $Enums.Term
  }

  export type StudentAttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentAttendanceWhereUniqueInput
    update: XOR<StudentAttendanceUpdateWithoutStudentInput, StudentAttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentAttendanceCreateWithoutStudentInput, StudentAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type StudentAttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentAttendanceWhereUniqueInput
    data: XOR<StudentAttendanceUpdateWithoutStudentInput, StudentAttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type StudentAttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: StudentAttendanceScalarWhereInput
    data: XOR<StudentAttendanceUpdateManyMutationInput, StudentAttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentAttendanceScalarWhereInput = {
    AND?: StudentAttendanceScalarWhereInput | StudentAttendanceScalarWhereInput[]
    OR?: StudentAttendanceScalarWhereInput[]
    NOT?: StudentAttendanceScalarWhereInput | StudentAttendanceScalarWhereInput[]
    id?: StringFilter<"StudentAttendance"> | string
    studentId?: StringFilter<"StudentAttendance"> | string
    date?: DateTimeFilter<"StudentAttendance"> | Date | string
    status?: StringFilter<"StudentAttendance"> | string
    term?: EnumTermFilter<"StudentAttendance"> | $Enums.Term
    session?: StringFilter<"StudentAttendance"> | string
  }

  export type FeeRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: FeeRecordWhereUniqueInput
    update: XOR<FeeRecordUpdateWithoutStudentInput, FeeRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<FeeRecordCreateWithoutStudentInput, FeeRecordUncheckedCreateWithoutStudentInput>
  }

  export type FeeRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: FeeRecordWhereUniqueInput
    data: XOR<FeeRecordUpdateWithoutStudentInput, FeeRecordUncheckedUpdateWithoutStudentInput>
  }

  export type FeeRecordUpdateManyWithWhereWithoutStudentInput = {
    where: FeeRecordScalarWhereInput
    data: XOR<FeeRecordUpdateManyMutationInput, FeeRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type FeeRecordScalarWhereInput = {
    AND?: FeeRecordScalarWhereInput | FeeRecordScalarWhereInput[]
    OR?: FeeRecordScalarWhereInput[]
    NOT?: FeeRecordScalarWhereInput | FeeRecordScalarWhereInput[]
    id?: StringFilter<"FeeRecord"> | string
    studentId?: StringFilter<"FeeRecord"> | string
    totalAmount?: FloatFilter<"FeeRecord"> | number
    amountPaid?: FloatFilter<"FeeRecord"> | number
    term?: EnumTermFilter<"FeeRecord"> | $Enums.Term
    session?: StringFilter<"FeeRecord"> | string
    isCleared?: BoolFilter<"FeeRecord"> | boolean
    gatewayRef?: StringNullableFilter<"FeeRecord"> | string | null
  }

  export type FeeInvoiceUpsertWithWhereUniqueWithoutStudentInput = {
    where: FeeInvoiceWhereUniqueInput
    update: XOR<FeeInvoiceUpdateWithoutStudentInput, FeeInvoiceUncheckedUpdateWithoutStudentInput>
    create: XOR<FeeInvoiceCreateWithoutStudentInput, FeeInvoiceUncheckedCreateWithoutStudentInput>
  }

  export type FeeInvoiceUpdateWithWhereUniqueWithoutStudentInput = {
    where: FeeInvoiceWhereUniqueInput
    data: XOR<FeeInvoiceUpdateWithoutStudentInput, FeeInvoiceUncheckedUpdateWithoutStudentInput>
  }

  export type FeeInvoiceUpdateManyWithWhereWithoutStudentInput = {
    where: FeeInvoiceScalarWhereInput
    data: XOR<FeeInvoiceUpdateManyMutationInput, FeeInvoiceUncheckedUpdateManyWithoutStudentInput>
  }

  export type FeeInvoiceScalarWhereInput = {
    AND?: FeeInvoiceScalarWhereInput | FeeInvoiceScalarWhereInput[]
    OR?: FeeInvoiceScalarWhereInput[]
    NOT?: FeeInvoiceScalarWhereInput | FeeInvoiceScalarWhereInput[]
    id?: StringFilter<"FeeInvoice"> | string
    studentId?: StringFilter<"FeeInvoice"> | string
    amount?: FloatFilter<"FeeInvoice"> | number
    dueDate?: DateTimeFilter<"FeeInvoice"> | Date | string
    status?: StringFilter<"FeeInvoice"> | string
    term?: EnumTermFilter<"FeeInvoice"> | $Enums.Term
    session?: StringFilter<"FeeInvoice"> | string
    createdAt?: DateTimeFilter<"FeeInvoice"> | Date | string
  }

  export type PaymentRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: PaymentRecordWhereUniqueInput
    update: XOR<PaymentRecordUpdateWithoutStudentInput, PaymentRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<PaymentRecordCreateWithoutStudentInput, PaymentRecordUncheckedCreateWithoutStudentInput>
  }

  export type PaymentRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: PaymentRecordWhereUniqueInput
    data: XOR<PaymentRecordUpdateWithoutStudentInput, PaymentRecordUncheckedUpdateWithoutStudentInput>
  }

  export type PaymentRecordUpdateManyWithWhereWithoutStudentInput = {
    where: PaymentRecordScalarWhereInput
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type PaymentRecordScalarWhereInput = {
    AND?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    OR?: PaymentRecordScalarWhereInput[]
    NOT?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    id?: StringFilter<"PaymentRecord"> | string
    studentId?: StringFilter<"PaymentRecord"> | string
    amount?: FloatFilter<"PaymentRecord"> | number
    reference?: StringFilter<"PaymentRecord"> | string
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
  }

  export type UserCreateWithoutStaffProfileInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: StudentProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStaffProfileInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStaffProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffProfileInput, UserUncheckedCreateWithoutStaffProfileInput>
  }

  export type UserUpsertWithoutStaffProfileInput = {
    update: XOR<UserUpdateWithoutStaffProfileInput, UserUncheckedUpdateWithoutStaffProfileInput>
    create: XOR<UserCreateWithoutStaffProfileInput, UserUncheckedCreateWithoutStaffProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffProfileInput, UserUncheckedUpdateWithoutStaffProfileInput>
  }

  export type UserUpdateWithoutStaffProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StudentProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type StudentProfileCreateWithoutGradesInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    classRoom?: ClassRoomCreateNestedOneWithoutStudentsInput
    studentGrade?: StudentGradeCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeRecordCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutGradesInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentGrade?: StudentGradeUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeRecordUncheckedCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutGradesInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutGradesInput, StudentProfileUncheckedCreateWithoutGradesInput>
  }

  export type StudentProfileUpsertWithoutGradesInput = {
    update: XOR<StudentProfileUpdateWithoutGradesInput, StudentProfileUncheckedUpdateWithoutGradesInput>
    create: XOR<StudentProfileCreateWithoutGradesInput, StudentProfileUncheckedCreateWithoutGradesInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutGradesInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutGradesInput, StudentProfileUncheckedUpdateWithoutGradesInput>
  }

  export type StudentProfileUpdateWithoutGradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    classRoom?: ClassRoomUpdateOneWithoutStudentsNestedInput
    studentGrade?: StudentGradeUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutGradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentGrade?: StudentGradeUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUncheckedUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateWithoutStudentGradeInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    classRoom?: ClassRoomCreateNestedOneWithoutStudentsInput
    grades?: GradeRecordCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeRecordCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutStudentGradeInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeRecordUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeRecordUncheckedCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutStudentGradeInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutStudentGradeInput, StudentProfileUncheckedCreateWithoutStudentGradeInput>
  }

  export type StudentProfileUpsertWithoutStudentGradeInput = {
    update: XOR<StudentProfileUpdateWithoutStudentGradeInput, StudentProfileUncheckedUpdateWithoutStudentGradeInput>
    create: XOR<StudentProfileCreateWithoutStudentGradeInput, StudentProfileUncheckedCreateWithoutStudentGradeInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutStudentGradeInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutStudentGradeInput, StudentProfileUncheckedUpdateWithoutStudentGradeInput>
  }

  export type StudentProfileUpdateWithoutStudentGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    classRoom?: ClassRoomUpdateOneWithoutStudentsNestedInput
    grades?: GradeRecordUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutStudentGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeRecordUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUncheckedUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateWithoutAttendanceInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    classRoom?: ClassRoomCreateNestedOneWithoutStudentsInput
    grades?: GradeRecordCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeRecordCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutAttendanceInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeRecordUncheckedCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeUncheckedCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeRecordUncheckedCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutAttendanceInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutAttendanceInput, StudentProfileUncheckedCreateWithoutAttendanceInput>
  }

  export type StudentProfileUpsertWithoutAttendanceInput = {
    update: XOR<StudentProfileUpdateWithoutAttendanceInput, StudentProfileUncheckedUpdateWithoutAttendanceInput>
    create: XOR<StudentProfileCreateWithoutAttendanceInput, StudentProfileUncheckedCreateWithoutAttendanceInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutAttendanceInput, StudentProfileUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentProfileUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    classRoom?: ClassRoomUpdateOneWithoutStudentsNestedInput
    grades?: GradeRecordUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeRecordUncheckedUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUncheckedUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUncheckedUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateWithoutStudentAttendanceInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    classRoom?: ClassRoomCreateNestedOneWithoutStudentsInput
    grades?: GradeRecordCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeRecordCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutStudentAttendanceInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeRecordUncheckedCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeRecordUncheckedCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutStudentAttendanceInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutStudentAttendanceInput, StudentProfileUncheckedCreateWithoutStudentAttendanceInput>
  }

  export type StudentProfileUpsertWithoutStudentAttendanceInput = {
    update: XOR<StudentProfileUpdateWithoutStudentAttendanceInput, StudentProfileUncheckedUpdateWithoutStudentAttendanceInput>
    create: XOR<StudentProfileCreateWithoutStudentAttendanceInput, StudentProfileUncheckedCreateWithoutStudentAttendanceInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutStudentAttendanceInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutStudentAttendanceInput, StudentProfileUncheckedUpdateWithoutStudentAttendanceInput>
  }

  export type StudentProfileUpdateWithoutStudentAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    classRoom?: ClassRoomUpdateOneWithoutStudentsNestedInput
    grades?: GradeRecordUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutStudentAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeRecordUncheckedUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUncheckedUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateWithoutFeesInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    classRoom?: ClassRoomCreateNestedOneWithoutStudentsInput
    grades?: GradeRecordCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutFeesInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeRecordUncheckedCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutFeesInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutFeesInput, StudentProfileUncheckedCreateWithoutFeesInput>
  }

  export type StudentProfileUpsertWithoutFeesInput = {
    update: XOR<StudentProfileUpdateWithoutFeesInput, StudentProfileUncheckedUpdateWithoutFeesInput>
    create: XOR<StudentProfileCreateWithoutFeesInput, StudentProfileUncheckedCreateWithoutFeesInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutFeesInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutFeesInput, StudentProfileUncheckedUpdateWithoutFeesInput>
  }

  export type StudentProfileUpdateWithoutFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    classRoom?: ClassRoomUpdateOneWithoutStudentsNestedInput
    grades?: GradeRecordUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeRecordUncheckedUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateWithoutFeeInvoiceInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    classRoom?: ClassRoomCreateNestedOneWithoutStudentsInput
    grades?: GradeRecordCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeRecordCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutFeeInvoiceInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeRecordUncheckedCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeRecordUncheckedCreateNestedManyWithoutStudentInput
    paymentRecord?: PaymentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutFeeInvoiceInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutFeeInvoiceInput, StudentProfileUncheckedCreateWithoutFeeInvoiceInput>
  }

  export type StudentProfileUpsertWithoutFeeInvoiceInput = {
    update: XOR<StudentProfileUpdateWithoutFeeInvoiceInput, StudentProfileUncheckedUpdateWithoutFeeInvoiceInput>
    create: XOR<StudentProfileCreateWithoutFeeInvoiceInput, StudentProfileUncheckedCreateWithoutFeeInvoiceInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutFeeInvoiceInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutFeeInvoiceInput, StudentProfileUncheckedUpdateWithoutFeeInvoiceInput>
  }

  export type StudentProfileUpdateWithoutFeeInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    classRoom?: ClassRoomUpdateOneWithoutStudentsNestedInput
    grades?: GradeRecordUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutFeeInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeRecordUncheckedUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUncheckedUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateWithoutPaymentRecordInput = {
    id?: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    classRoom?: ClassRoomCreateNestedOneWithoutStudentsInput
    grades?: GradeRecordCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeCreateNestedManyWithoutStudentInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceCreateNestedManyWithoutStudentInput
    fees?: FeeRecordCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutPaymentRecordInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    classRoomId?: string | null
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeRecordUncheckedCreateNestedManyWithoutStudentInput
    studentGrade?: StudentGradeUncheckedCreateNestedManyWithoutStudentInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    studentAttendance?: StudentAttendanceUncheckedCreateNestedManyWithoutStudentInput
    fees?: FeeRecordUncheckedCreateNestedManyWithoutStudentInput
    feeInvoice?: FeeInvoiceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutPaymentRecordInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutPaymentRecordInput, StudentProfileUncheckedCreateWithoutPaymentRecordInput>
  }

  export type StudentProfileUpsertWithoutPaymentRecordInput = {
    update: XOR<StudentProfileUpdateWithoutPaymentRecordInput, StudentProfileUncheckedUpdateWithoutPaymentRecordInput>
    create: XOR<StudentProfileCreateWithoutPaymentRecordInput, StudentProfileUncheckedCreateWithoutPaymentRecordInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutPaymentRecordInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutPaymentRecordInput, StudentProfileUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type StudentProfileUpdateWithoutPaymentRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    classRoom?: ClassRoomUpdateOneWithoutStudentsNestedInput
    grades?: GradeRecordUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutPaymentRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    classRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeRecordUncheckedUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUncheckedUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateManyClassRoomInput = {
    id?: string
    userId: string
    admissionNumber: string
    curriculum?: $Enums.CurriculumType
    currentClass?: string | null
    guardianName: string
    guardianPhone: string
    dateOfBirth?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentProfileUpdateWithoutClassRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    grades?: GradeRecordUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutClassRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeRecordUncheckedUpdateManyWithoutStudentNestedInput
    studentGrade?: StudentGradeUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    studentAttendance?: StudentAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    fees?: FeeRecordUncheckedUpdateManyWithoutStudentNestedInput
    feeInvoice?: FeeInvoiceUncheckedUpdateManyWithoutStudentNestedInput
    paymentRecord?: PaymentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateManyWithoutClassRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    curriculum?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    currentClass?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianPhone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeRecordCreateManyStudentInput = {
    id?: string
    subject: string
    term: $Enums.Term
    session: string
    caScore?: number | null
    examScore?: number | null
    britishGrade?: string | null
    curriculumType: $Enums.CurriculumType
    createdAt?: Date | string
  }

  export type StudentGradeCreateManyStudentInput = {
    id?: string
    subject: string
    term: $Enums.Term
    session: string
    score: number
    createdAt?: Date | string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: string
    date?: Date | string
    isPresent?: boolean
    term: $Enums.Term
  }

  export type StudentAttendanceCreateManyStudentInput = {
    id?: string
    date?: Date | string
    status: string
    term: $Enums.Term
    session: string
  }

  export type FeeRecordCreateManyStudentInput = {
    id?: string
    totalAmount: number
    amountPaid?: number
    term: $Enums.Term
    session: string
    isCleared?: boolean
    gatewayRef?: string | null
  }

  export type FeeInvoiceCreateManyStudentInput = {
    id?: string
    amount: number
    dueDate: Date | string
    status?: string
    term: $Enums.Term
    session: string
    createdAt?: Date | string
  }

  export type PaymentRecordCreateManyStudentInput = {
    id?: string
    amount: number
    reference: string
    createdAt?: Date | string
  }

  export type GradeRecordUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    caScore?: NullableFloatFieldUpdateOperationsInput | number | null
    examScore?: NullableFloatFieldUpdateOperationsInput | number | null
    britishGrade?: NullableStringFieldUpdateOperationsInput | string | null
    curriculumType?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeRecordUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    caScore?: NullableFloatFieldUpdateOperationsInput | number | null
    examScore?: NullableFloatFieldUpdateOperationsInput | number | null
    britishGrade?: NullableStringFieldUpdateOperationsInput | string | null
    curriculumType?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    caScore?: NullableFloatFieldUpdateOperationsInput | number | null
    examScore?: NullableFloatFieldUpdateOperationsInput | number | null
    britishGrade?: NullableStringFieldUpdateOperationsInput | string | null
    curriculumType?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGradeUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGradeUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentGradeUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
  }

  export type StudentAttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
  }

  export type StudentAttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
  }

  export type StudentAttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
  }

  export type FeeRecordUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    isCleared?: BoolFieldUpdateOperationsInput | boolean
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeeRecordUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    isCleared?: BoolFieldUpdateOperationsInput | boolean
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeeRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    isCleared?: BoolFieldUpdateOperationsInput | boolean
    gatewayRef?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeeInvoiceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeInvoiceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeInvoiceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    term?: EnumTermFieldUpdateOperationsInput | $Enums.Term
    session?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}