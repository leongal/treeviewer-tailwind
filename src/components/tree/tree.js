import React, { useState } from 'react'
import cn from 'classnames'
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { MinusSquare } from '../../assets/Icons';
import { PlusSquare } from '../../assets/Icons';

function Tree({ jsonData, children, className, ...rest }) {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );
  return (
    <div className={cn("bg-primary rounded")}>
      <TreeView
        className={cn("text-left text-white")}
        defaultCollapseIcon={ <MinusSquare /> }
        defaultExpandIcon={ <PlusSquare /> }
      >
        {renderTree(jsonData)}
      </TreeView>
    </div>
  );
}

export default Tree;