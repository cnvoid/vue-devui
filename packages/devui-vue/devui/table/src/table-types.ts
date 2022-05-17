import { PropType, ExtractPropTypes, ComponentInternalInstance, InjectionKey, Ref } from 'vue';
import { TableStore } from './store/store-types';

export type TableSize = 'sm' | 'md' | 'lg';
export type BorderType = '' | 'bordered' | 'borderless';

export type SpanMethod = (data: {
  row: any;
  column: any;
  rowIndex: number;
  columnIndex: number;
}) => number[] | { rowspan: number; colspan: number };

export const TableProps = {
  data: {
    type: Array as PropType<Record<string, any>[]>,
    default: [],
  },
  striped: {
    type: Boolean,
    default: false,
  },
  scrollable: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
  },
  maxHeight: {
    type: String,
  },
  tableWidth: {
    type: String,
  },
  tableHeight: {
    type: String,
  },
  size: {
    type: String as PropType<TableSize>,
    validator(value: string): boolean {
      return value === 'sm' || value === 'md' || value === 'lg';
    },
    default: 'sm',
  },
  rowHoveredHighlight: {
    type: Boolean,
    default: true,
  },
  fixHeader: {
    type: Boolean,
    default: false,
  },
  checkable: {
    type: Boolean,
    default: false,
  },
  tableLayout: {
    type: String as PropType<'fixed' | 'auto'>,
    default: 'fixed',
    validator(v: string): boolean {
      return v === 'fixed' || v === 'auto';
    },
  },
  showLoading: {
    type: Boolean,
    default: false,
  },
  headerBg: {
    type: Boolean,
    default: false,
  },
  spanMethod: {
    type: Function as PropType<SpanMethod>,
  },
  borderType: {
    type: String as PropType<BorderType>,
    default: '',
  },
  empty: {
    type: String,
    default: 'No Data',
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
};

export type TablePropsTypes = ExtractPropTypes<typeof TableProps>;

export type DefaultRow = TablePropsTypes['data'][number];

export interface Table<T> extends ComponentInternalInstance {
  store: TableStore<T>;
  props: TablePropsTypes;
  tableId: string;
  hiddenColumns: Ref<HTMLElement | null>;
}

// export interface TableCheckStatusArg {
//   pageAllChecked?: boolean; // 全选
//   pageHalfChecked?: boolean; // 半选
// }

// export interface RowToggleStatusEventArg {
//   rowItem: any; // 行数据
//   open: boolean; // 子表格是否展开
// }

export interface TableMethods<T = Record<string, any>> {
  getCheckedRows(): T[];
  // setRowCheckStatus(arg: TableCheckStatusArg): void
  // setTableCheckStatus(arg: RowToggleStatusEventArg): void
  // setRowChildToggleStatus(): void
  // setTableChildrenToggleStatus(): void
  // cancelEditingStatus(): void
}

export const TABLE_TOKEN: InjectionKey<Table> = Symbol();
