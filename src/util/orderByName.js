const orderByName = {
  increasing: (a, b) => {
    if (a.name.first < b.name.first) return -1;
    if (a.name.first > b.name.first) return 1;
    return 0;
  },
  decreasing: (a, b) => {
    if (a.name.first > b.name.first) return -1;
    if (a.name.first < b.name.first) return 1;
    return 0;
  },
};

export default orderByName;
