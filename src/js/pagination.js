import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const options = {
  totalItems: 5,
  itemsPerPage: 5,
  visiblePages: 5,
  page: 1,
};

const container = document.getElementById('pagination');
const pagination = new Pagination(container, options);
const gallery = document.getElementById('.gallery');
const page = pagination.getCurrentPage();
console.log(page);
