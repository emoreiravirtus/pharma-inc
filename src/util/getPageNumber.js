const getPageNumber = (id) => {
  return Math.ceil(id / 50);
}

export default getPageNumber;