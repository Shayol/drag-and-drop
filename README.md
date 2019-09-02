# Drag and drop React component, Swipe component, Toggle, Range

This repo contains four React components. By default swipe mode is enabled. User can swipe to the left to reveal hidden item view.
Drag and drop can be enabled with toggle at the top.

## Drag and drop component

DnD allows to drag item in a list within same list to sort it manually as well as to drag item into another list.
Click toggle to enable drag mode

```
 <DraggableList
    type="one"
    style={style}
    rowStyle={rowStyle}
    data={type1}
    DraggableItem={Item}
    onMove={this.onMove}
    draggable={this.state.draggable}
/>
```

`data` is an array with all items for this list.
`onMove` prop will receive arguments: id of the dropped item, id of the item on top of which the dragged item was dropped, type of List. The function passed as onMove prop will be called when user finishes dragging and drops the item.
There can be multiple lists on page.
`type` corresponds to the property of the item based on which item is assigned to a list.
`style` applies to wrapping list, `rowStyle` to item in a list.
`DraggableItem` will receive `item`, `isActive` props.
`item` is a component for item from this list. `isActive` is true if this item is dragged.
`draggable` Boolean prop allows or disallows dnd functionality

## Swipe component

Swipe or drag with a mouse item to the left to show hidden view with delete button or any other content.
Swipe to the right to hide hidden view.

```
<SwipeRow>
    <HiddenView>
        <Confirm onDelete={() => onDelete(item.id)} />
    </HiddenView>
    <VisibleView swipable={swipable}>
        <Item item={item} isActive={isActive} />
    </VisibleView>
</SwipeRow>
```

Put content inside SwipeRow's two children. HiddenView and VisibleView.
VisibleView accepts `swipable` Boolean prop that conditionally allows swiping.

## Switch Toggle

```
<Toggle
    checked={this.state.draggable}
    onChange={this.onToggleDraggable}
    color="#06d7a0"
/>
```

## Range

`color` prop can be a color or gradient

```
<RangeNumbers
    onClick={this.onRangeChange}
    value={this.state.rangeValue}
    color="#4A148C"
    activeColor="#06d7a0"
/>
```

```
<Range
    color={"linear-gradient(to right, rgba(0,0,0,0) 0%, #4A148C 100%)"}
    value={this.state.rangeValue}
    onChange={this.onRangeChange}
/>
```
