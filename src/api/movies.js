import request from '@/utils/request';

export function getMovies(params) {
  return request({
    url: '/j/new_search_subjects',
    method: 'get',
    params,
  });
}

export function add() {
  return request({});
}
