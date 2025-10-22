export enum TestEnum {
  TEST_1 = 'test',
}

export namespace TestEnum {
  export const isTest = (value: TestEnum) => {
    return value === TestEnum.TEST_1;
  }
}
