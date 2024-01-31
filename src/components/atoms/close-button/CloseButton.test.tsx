import React from "react";
import { render, screen, renderHook, act } from "@testing-library/react";
import CloseButton from "./CloseButton";
import { useStore } from "../../../store";

describe("CloseButton", () => {
  test("クラッシュせずにレンダリングされる", () => {
    render(<CloseButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test('"閉じる"というテキストを含む', () => {
    render(<CloseButton />);
    expect(screen.getByText("閉じる")).toBeInTheDocument();
  });

  test("rightBorderプロパティがtrueの場合、border-rクラスを適用する", () => {
    render(<CloseButton rightBorder={true} />);
    expect(screen.getByRole("button")).toHaveClass("border-r");
  });

  test("rightBorderプロパティがfalseの場合、border-rクラスを適用しない", () => {
    render(<CloseButton rightBorder={false} />);
    expect(screen.getByRole("button")).not.toHaveClass("border-r");
  });

  test("クリックするとsetMenuが実行され、menuの値がcloseになる", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setMenu("member");
    });
    expect(result.current.menu).toBe("member");
    render(<CloseButton />);
    act(() => {
      screen.getByRole("button").click();
    });
    expect(result.current.menu).toBe("close");
  });

  test("スナップショットテスト", () => {
    const { container } = render(<CloseButton />);
    expect(container).toMatchSnapshot();
  });
});
