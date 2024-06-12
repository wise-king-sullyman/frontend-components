import React from 'react';
import TagCountPF from '@patternfly/react-component-groups/dist/dynamic/TagCount';
import { ButtonProps } from '@patternfly/react-core/dist/dynamic/components/Button';
export interface TagCountProps extends Omit<ButtonProps, 'variant'> {
  count?: number;
  onTagClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'plain' | 'control' | undefined;
}

/**
 * @deprecated Do not use deprecated TagCount import, the component has been moved to @patternfly/react-component-groups
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TagCount: React.FunctionComponent<TagCountProps> = ({ onTagClick, ...props }) => <TagCountPF onClick={onTagClick} iconSize="md" {...props} />;

export default TagCount;
