import { useState, useEffect } from "react";
export const useVisible = (props) => {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries
        .filter((it) => it.isIntersecting)
        .forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(props.current);
  }, []);
  return isVisible;
};
