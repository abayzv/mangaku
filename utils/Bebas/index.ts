interface Bebas {
  titleToUppercase(e: Event): string;
  titleToLowercase(e: Event): string;
}

const BEBAS: Bebas = {
  titleToUppercase(e: Event): string {
    const target = e.target as HTMLInputElement;
    console.log(target.value.toUpperCase());
    return target.value.toUpperCase();
  },
  titleToLowercase(e: Event): string {
    const target = e.target as HTMLInputElement;
    console.log(target.value.toLocaleLowerCase());
    return target.value.toLocaleLowerCase();
  },
};

export default BEBAS;
