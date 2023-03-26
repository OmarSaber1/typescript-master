interface Person {
  name: string;
  age?: number;
  phone?: number;
}

type PersonOptional = Partial<Person>;
type PersonRequired = Required<Person>;
type PersonPick = Pick<Person, "name" | "age">;

interface Cat {
  name: string;
  age: number;
}

type readonlycats = Readonly<Cat>;

const cat: readonlycats = {
  age: 20,
  name: "kitty",
};

cat.age = 12;

const arr = [1, 2, 3] as const;
arr[0] = 1;

// ------------------

type listners<type> = {
  [property in keyof type as `on${Capitalize<string & property>}Change`]: (
    newVal: type[property]
  ) => void;
};

type dog = {
  name: string;
  age: number;
};

const bullDog: dog = {
  age: 20,
  name: "byll",
};

type listnerObject = listners<dog>;
