abstract class Department {
  static fiscalYear = 2023;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }
  addEmploy(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe() {
    console.log("IT Department -- ID : " + this.id);
  }
}

const employ1 = Department.createEmployee("lord");
console.log(employ1, Department.fiscalYear);

const IT = new ITDepartment("d2", ["david"]);
IT.describe();
// IT.addEmploy("david");
// IT.addEmploy("Seunghun");
// IT.addEmploy("popo");
// IT.describe();
// IT.printEmployeeInformation();

// console.log(IT);

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      this.instance;
    }
    this.instance = new AccountingDepartment("d3", []);
    return this.instance;
  }

  describe(): void {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmploy(employee: string): void {
    if (employee === "david") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  printEmployeeInformation(): void {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  printLastReport() {
    console.log(this.lastReport);
  }
}

// const accounting = new AccountingDepartment("d3", []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = "Year end report";
accounting.addReport("Something went wrong...");

accounting.addEmploy("Aoi");
accounting.addEmploy("Seunghun");

accounting.addReport("Hello sir!");
accounting.addReport("Bye sir!");
accounting.printReports();
accounting.printLastReport();
accounting.describe();
// accounting.printReports();
accounting.printEmployeeInformation();
// accounting.addEmploy("Max");
// accounting.addEmploy("Seunghun");
// accounting.addEmploy("popo");

// const accountingCopy = { name: "s", describe: accounting.describe };
// accounting.describe();
// accounting.printEmployeeInformation();

// const HR = new Department("2", "human resource");
// HR.addEmploy("Tracy");
// HR.printEmployeeInformation();
// HR.describe();
// accountingCopy.describe(); // error
