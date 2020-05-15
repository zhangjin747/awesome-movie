import request from '@/utils/request';

export function getTop250() {
  return request.get('/top250');
}

export function getInTheaters() {
  return request.get('/in_theaters');
}

export function getComingSoon() {
  return request.get('/coming_soon');
}
