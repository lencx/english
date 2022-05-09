// highlight('i like you', '3') -> i l<em>i</em>ke you
// highlight('i like you', '3-5,7') -> i l<em>ik</em>e <em>y</em>ou
export const highlight = (content: string, range: string) => {
  const _range = range.split(',');
  let start = 0;
  let end = 0;
  let oStr = '';
  let str = content;

  _range.forEach((index: string, idx: number) => {
    if (/-/.test(index)) {
      const a = index.split('-');
      start = +a[0] + idx * 9;
      end = +a[1] + idx * 9;
      oStr = str.substring(start, end);
    } else {
      start = +index + idx * 9;
      end = start + 1;
      oStr = str.substring(start, start + 1);
    }

    str = str.substring(0, start) + `<em>${oStr}</em>` + str.substring(end);
  });

  return str;
};

export const getScrollPosition = (el: any = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});
