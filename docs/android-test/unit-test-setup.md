---
sidebar_position: 1
---

# Unit Test Setup

For local unit tests you just need these dependencies:

```groovy
dependencies {
    // Required -- JUnit 4 framework
    testImplementation 'junit:junit:4.13.2'
    // Optional -- Robolectric environment
    testImplementation 'androidx.test:core:1.4.0'
    // Optional -- Mockito framework
    testImplementation 'org.mockito:mockito-core:2.25.0'
}
```

Create this folder structure for unit tests:

```
/app/src/test/java/
```

Sample unit test file

```java
package com.example.testapp;

import org.junit.Test;

import static org.junit.Assert.*;

public class ExampleUnitTest {
    @Test
    public void addition_isCorrect() {
        assertEquals(4, 2 + 2);
    }
}
```

# Reference

- Android Developers: [Build Local Unit Tests](https://developer.android.com/training/testing/unit-testing/local-unit-tests)