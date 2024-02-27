export interface RandomUserProps {
  name: { title: string; first: string; last: string };
  email: string;
  phone: string;
  picture: { large: string; medium: string; thumbnail: string };
}

export const getRandomUser = () => {
  return fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.results[0] as RandomUserProps;
    });
};

// Path: src/app/components/api/randomUserApi.ts
