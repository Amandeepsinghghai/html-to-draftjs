import { Entity } from 'draft-js';

const getEntityId = (node) => {
  let entityId = undefined;
  if (
    node instanceof HTMLAnchorElement
  ) {
    const entityConfig = {};
    if (node.dataset.mention !== undefined) {
      entityConfig.url = node.href;
      entityConfig.text = node.innerHTML;
      entityConfig.value = node.dataset.value;
      entityId = Entity.__create(
        'MENTION',
        'IMMUTABLE',
        entityConfig,
      );
    } else {
      entityConfig.url = node.getAttribute('href') || node.href;
      entityConfig.title = node.innerHTML;
      entityConfig.target = node.target;
      entityId = Entity.__create(
        'LINK',
        'MUTABLE',
        entityConfig,
      );
    }
  }
  return entityId;
}

module.exports = getEntityId;
