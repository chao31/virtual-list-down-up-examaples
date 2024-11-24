import { Navigate } from 'react-router-dom';
import loadable from '@loadable/component';
import Layout from '../layout';

const Redirect = ({ to }) => <Navigate to={to} replace />;

const VariableSize = loadable(() => import(/* webpackChunkName: "variable" */ '@/components/VirtualSize'));
const UpAndDown = loadable(() => import(/* webpackChunkName: "up-and-down" */ '@/components/UpAndDown'));
const Custom = loadable(() => import(/* webpackChunkName: "custom" */ '@/components/Custom'));
const Down = loadable(() => import(/* webpackChunkName: "down" */ '@/components/Down'));
const Up = loadable(() => import(/* webpackChunkName: "up" */ '@/components/Up'));
const DelItem = loadable(() => import(/* webpackChunkName: "up" */ '@/components/Del'));
const GetListData = loadable(() => import(/* webpackChunkName: "up" */ '@/components/GetListData'));

export const ROUTES = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Redirect to="variable-size-list" />,
      },
      {
        path: 'variable-size-list',
        // element: <VariableSizeList />,
        element: <VariableSize />,
        
      },
      {
        path: 'down',
        Component: Down,
      },
      {
        path: 'up',
        Component: Up,
      },
      {
        path: 'both',
        Component: UpAndDown,
      },
      {
        path: 'custom-loading',
        Component: Custom,
      },
      {
        path: 'delItem',
        Component: DelItem,
      },
      {
        path: 'getListData',
        Component: GetListData,
      },
      {
        path: '*',
        element: <Redirect to="variable-size-list" />,
      },
    ],
  },
];
