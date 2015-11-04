declare module dataValidation {
  interface Rule {
    isValueValid(value: any, parameters?: any): boolean;
  }

  interface RulesCollection {
  }

  interface IValidationConfiguration {
    rules?: {
      [propertyName: string]: (ValidationRule | Rule | string)[];
    };
  }

  interface ValidationRule {
    parameters: any[] | any;
    applyCondition: any;
    rule: Rule;
    shouldBeApplied(): boolean;
    getParametersValues(): any[] | any;
    isValueValid(value: any): boolean;
  }

  interface Validator {
    setPromiseLibrary(newPromiseLibrary: any): void;
    validateValue(value: any, rules?: (ValidationRule | Rule | string)[]): ValidationRule;
    asyncValidateValue(value:any, rules?:(ValidationRule|Rule|string)[]): Promise<ValidationRule|void>;
    isValueValid(value: any, rules?: (ValidationRule | Rule | string)[]): Promise<any>;
    isObjectValid(objectToValidate: any, validationConfig?: IValidationConfiguration): Promise<any>;
  }

  interface DataValidationModule {
    Rule: {
      prototype: Rule;
    };
    Validator: {
      new (): Validator;
      prototype: Validator;
    };
    ValidationRule: {
      new (rawRule: Rule | string, parameters?: any[] | any, applyCondition?: Function|any): ValidationRule;
      prototype: ValidationRule;
    };
    RulesCollection: {
      reset(): void;
      addRule(ruleName: string, rule: Rule): void;
      setRule(ruleName:string, rule:Rule): void;
      getRule(ruleName: string): Rule;
    };
    IValidationConfiguration:{
      prototype: IValidationConfiguration;
    }
  }
}
