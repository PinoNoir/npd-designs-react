import React from 'react';
import clsx from 'clsx';

// Example of importing CSS modules with full type safety
import buttonStyles from '@/components/button/Button.module.css';
import cardStyles from '@/components/card/Card.module.css';
import projectDeliverablesStyles from '@/pages/projects/project-components/project-deliverables/ProjectDeliverables.module.css';

/**
 * Example component demonstrating CSS module type safety
 * 
 * Benefits:
 * 1. Autocomplete for CSS class names
 * 2. Type checking prevents typos
 * 3. Refactoring support
 * 4. Better IDE experience
 */
const CSSModuleTypesExample: React.FC = () => {
  // TypeScript will provide autocomplete for these class names
  const buttonClasses = clsx(
    buttonStyles.button,        // ✅ Autocomplete works
    buttonStyles.primary,       // ✅ Type checking
    // buttonStyles.nonexistent, // ❌ TypeScript error - class doesn't exist
  );

  const cardClasses = clsx(
    cardStyles.card,            // ✅ Autocomplete works
    cardStyles.content,         // ✅ Type checking
    // cardStyles.missing,       // ❌ TypeScript error - class doesn't exist
  );

  const deliverableClasses = clsx(
    projectDeliverablesStyles.deliverablesSection,  // ✅ Autocomplete works
    projectDeliverablesStyles.deliverablesGrid,     // ✅ Type checking
    projectDeliverablesStyles.deliverable,          // ✅ Autocomplete works
    // projectDeliverablesStyles.missingClass,      // ❌ TypeScript error
  );

  return (
    <div className="css-module-types-example">
      <h2>CSS Module Type Safety Example</h2>
      
      <div className="benefits">
        <h3>Benefits of CSS Module Types:</h3>
        <ul>
          <li>✅ Autocomplete for CSS class names</li>
          <li>✅ Type checking prevents typos</li>
          <li>✅ Refactoring support</li>
          <li>✅ Better IDE experience</li>
          <li>✅ Compile-time error detection</li>
        </ul>
      </div>

      <div className="examples">
        <h3>Usage Examples:</h3>
        
        {/* Button example */}
        <div className="example">
          <h4>Button Component:</h4>
          <button className={buttonClasses}>
            Type-Safe Button
          </button>
          <p>Try typing <code>buttonStyles.</code> in your IDE - you'll get autocomplete!</p>
        </div>

        {/* Card example */}
        <div className="example">
          <h4>Card Component:</h4>
          <div className={cardClasses}>
            <div className={cardStyles.content}>
              Type-Safe Card Content
            </div>
          </div>
        </div>

        {/* Deliverables example */}
        <div className="example">
          <h4>Project Deliverables:</h4>
          <div className={deliverableClasses}>
            <div className={projectDeliverablesStyles.deliverable}>
              <p className={projectDeliverablesStyles.deliverableLabel}>
                Type-Safe Deliverable
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="configuration">
        <h3>Configuration:</h3>
        <p>The following files enable CSS module type safety:</p>
        <ul>
          <li><code>src/types/css-modules.d.ts</code> - Global type declarations</li>
          <li><code>tcm.config.js</code> - Type generation configuration</li>
          <li><code>package.json</code> - Build scripts for type generation</li>
          <li><code>tsconfig.json</code> - TypeScript configuration</li>
        </ul>
      </div>

      <div className="commands">
        <h3>Available Commands:</h3>
        <ul>
          <li><code>pnpm generate-css-types</code> - Watch mode for type generation</li>
          <li><code>pnpm generate-css-types-once</code> - Generate types once</li>
          <li><code>pnpm dev</code> - Development with automatic type generation</li>
          <li><code>pnpm build</code> - Build with type generation</li>
        </ul>
      </div>
    </div>
  );
};

export default CSSModuleTypesExample; 