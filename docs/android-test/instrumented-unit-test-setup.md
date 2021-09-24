---
sidebar_position: 2
---

# Instrumented Unit Test Setup

For instrumental unit tests you just need these dependencies and configurations:

```groovy
android {
	// Optional -- Libraries from SDK to test content providers with ProviderTestCase2
	useLibrary 'android.test.runner'
    useLibrary 'android.test.base'
    useLibrary 'android.test.mock'		

    defaultConfig {
        // Required -- name of class that will run tests
        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }
}

dependencies {
    // Required -- to test activities with ActivityScenario and ApplicationProvider
	androidTestImplementation 'androidx.test:core:1.4.0'
	// Required -- Runner that will get test apk and run against device
    androidTestImplementation 'androidx.test:runner:1.4.0'
	// Optional -- to test services with ServiceTestRule
    androidTestImplementation 'androidx.test:rules:1.4.0'
}
```

Create this folder structure for instrumentation unit tests:

```
/app/src/androidTest/java/
```

Sample instrumented unit test file

```java
package com.example.testapp;

import android.content.Context;

import androidx.test.core.app.ActivityScenario;
import androidx.test.core.app.ApplicationProvider;

import org.junit.Test;

import static org.junit.Assert.*;

public class ExampleInstrumentedTest {
    @Test
    public void useAppContext() {
        Context appContext = ApplicationProvider.getApplicationContext();
        assertEquals("com.example.multimodulesampleapp", appContext.getPackageName());
    }
}
```

# Reference

- Android Developers: [Build Instrumented Unit Tests](https://developer.android.com/training/testing/unit-testing/instrumented-unit-tests)
- Android Developers: [Test Your Service](https://developer.android.com/training/testing/integration-testing/service-testing)
- Android Develoeprs: [ActivityScenario](https://developer.android.com/reference/androidx/test/core/app/ActivityScenario)