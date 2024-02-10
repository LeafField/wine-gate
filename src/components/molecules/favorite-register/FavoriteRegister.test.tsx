import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteRegister from "./FavoriteRegister";

describe("FavoriteRegisterの単体テスト", () => {
  test("お気に入り登録ボタンが正しくレンダリングされる", async () => {
    const addFavoriteCallback = jest.fn();
    const { getByText } = render(
      <FavoriteRegister
        favorite={false}
        loading={false}
        addFavoriteCallback={addFavoriteCallback}
        removeFavoriteCallback={() => {}}
      />,
    );

    const button = getByText("お気に入り登録");
    await userEvent.click(button);
    return expect(addFavoriteCallback).toHaveBeenCalled();
  });

  test("お気に入り解除ボタンが正しくレンダリングされる", async () => {
    const removeFavoriteCallback = jest.fn();
    const { getByText } = render(
      <FavoriteRegister
        favorite={true}
        loading={false}
        addFavoriteCallback={() => {}}
        removeFavoriteCallback={removeFavoriteCallback}
      />,
    );

    const button = getByText("お気に入り解除");
    await userEvent.click(button);
    return expect(removeFavoriteCallback).toHaveBeenCalled();
  });

  test("お気に入り登録ボタンがローディング中はクリックできない", async () => {
    const addFavoriteCallback = jest.fn();
    const { getByText } = render(
      <FavoriteRegister
        favorite={false}
        loading
        addFavoriteCallback={addFavoriteCallback}
        removeFavoriteCallback={() => {}}
      />,
    );

    const button = getByText("お気に入り登録");
    await userEvent.click(button);
    return expect(addFavoriteCallback).not.toHaveBeenCalled();
  });

  test("お気に入り解除ボタンがローディング中はクリックできない", async () => {
    const removeFavoriteCallback = jest.fn();
    const { getByText } = render(
      <FavoriteRegister
        favorite={true}
        loading
        addFavoriteCallback={() => {}}
        removeFavoriteCallback={removeFavoriteCallback}
      />,
    );

    const button = getByText("お気に入り解除");
    await userEvent.click(button);
    return expect(removeFavoriteCallback).not.toHaveBeenCalled();
  });
});
