import React, { useState } from 'react'
import styles from './tree.css'
import cn from 'classnames'
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

function Tree({ jsonData, children, className, ...rest }) {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );
  return (
    <>
      <TreeView
        defaultCollapseIcon={ <ExpandMoreIcon /> }
        defaultExpandIcon={ <ChevronRightIcon /> }
      >
        {renderTree(jsonData)}
      </TreeView>
    </>
  );
}

export default Tree;